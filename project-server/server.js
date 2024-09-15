const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { createClient } = require("@supabase/supabase-js");
const OpenAI = require("openai");
require("dotenv").config();

const app = express();
const port = 4000;

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

const supabaseURL = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

const supabase = createClient(supabaseURL, supabaseKey);

const llmApi = new OpenAI({
  apiKey: process.env.OPEN_AI_KEY,
  project: process.env.PORJECT_ID,
});

app.get("/", (req, res) => {
  res.json("Hello, World!");
});

app.get("/startups", async (req, res) => {
  try {
    const { data, error } = await supabase.from("startups").select("*");

    if (error) {
      throw error;
    }

    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/compare", async (req, res) => {
  try {
    const data = req.body;
    const { id1, id2 } = data;

    const { data: data1, error: error1 } = await supabase
      .from("startups")
      .select("roi, market_share, num_investors, raised, minimum_inv")
      .eq("id", id1)
      .single();
    const { data: data2, error: error2 } = await supabase
      .from("startups")
      .select("roi, market_share, num_investors, raised, minimum_inv")
      .eq("id", id2)
      .single();

    if (error1 || error2) {
      res.status(500).json({ error: "Internal Server Error" });
    }

    if (!data1 || !data2) {
      return res.status(400).json({ error: "One or both startups not found" });
    }

    const prompt =
      "Context: WE ARE USING YOUR SERVCES TO DETERMINE WHICH STARTUP IS BETTER, YOU HAVE TO DECIDE, GIVE A BREIF EXPLANATION OF 'WHY IS BETTER', BUT ENTIRELY MAKING A CHOICE BETWEEN THE 2 STARTUPS, THIS IS REALLY IMPORTANT: YOU HAVE TO RETURN THE STARTUP ID LIKE THIS (EXAMPLE) -> {$1$}. Startup 1 roi: " +
      JSON.stringify(data1.roi) +
      "market share: " +
      JSON.stringify(data1.market_share) +
      "id: " +
      JSON.stringify(data1.id) +
      "name: " +
      JSON.stringify(data1.name) +
      "number of investors: " +
      JSON.stringify(data1.num_investors) +
      "Money raised: " +
      JSON.stringify(data1.raised) +
      "Minimum investment payment: " +
      JSON.stringify(data1.minimum_inv) +
      ". Startup 2" +
      JSON.stringify(data2.roi) +
      "market share: " +
      JSON.stringify(data2.market_share) +
      "id: " +
      JSON.stringify(data1.id) +
      "name: " +
      JSON.stringify(data1.name) +
      "number of investors: " +
      JSON.stringify(data2.num_investors) +
      "Money raised: " +
      JSON.stringify(data2.raised) +
      "Minimum investment payment: " +
      JSON.stringify(data2.minimum_inv) +
      ". Which startup is better?";

    result = await llmApi.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are an AI that compares startup data.",
        },
        { role: "user", content: prompt },
      ],
      max_tokens: 350,
    });

    const message = result.choices[0].message.content;
    console.log(message);

    return res.status(200).json({ message: message });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message || "Internal Server Error" });
  }
});

app.get("/llm", async (req, res) => {
  try {
    res.json(result.data.choices[0].message.content);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/startups/:id", async (req, res) => {
  try {
    const { id } = req.params; // Obtener el ID de los parámetros de la URL
    const { data, error } = await supabase
      .from("startups")
      .select("*")
      .eq("id", id) // Filtrar por ID
      .single(); // Esperar un solo resultado

    if (error) {
      throw error;
    }

    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/employers/:id", async (req, res) => {
  try {
    const { id } = req.params; // Obtener el ID de los parámetros de la URL
    const { data, error } = await supabase
      .from("employers") // Asegúrate de que esta tabla existe
      .select("*")
      .eq("id", id) // Filtrar por ID
      .single(); // Esperar un solo resultado

    if (error) {
      throw error;
    }

    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.info(`Listening to port: ${port}`);
});
