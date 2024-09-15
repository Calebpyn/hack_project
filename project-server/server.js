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
  baseURL: "https://api.aimlapi.com",
  apiKey: "399117a6626e49639732bc3ffc61b991 ",
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
      .eq("id", id1);
    const { data: data2, error: error2 } = await supabase
      .from("startups")
      .select("roi, market_share, num_investors, raised, minimum_inv")
      .eq("id", id2);

    if (error1 || error2) {
      res.status(500).json({ error: "Internal Server Error" });
    }

    
    const result = await llmApi.chat.completions.create({
      model: "meta-llama/Meta-Llama-3-8B-Instruct-Turbo",
      messages: [
        {
          role: "system",
          content: "You are an AI that compares startup data."
        },
        {
          role: "user",
          content: `Compare the following startups:`
        }
      ]
    });

    const message = result.choices[0].message.content;

    res.status(200).json({
      message: message
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, console.info(`Listening to port: ${port}`));
