const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { createClient } = require("@supabase/supabase-js");
require('dotenv').config();

const app = express();
const port = 4000;

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

const supabaseURL = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY; 
const supabase = createClient(supabaseURL, supabaseKey);

app.get("/", (req, res) => {
  res.json("Hello, World!");
});

app.get("/startups", async (req, res) => {
  try {
    const {data, error} = await supabase.from("startups").select("*");

    if (error) {
      throw error;
    }

    res.json(data);

  } catch (error) {
    console.error(error);
    res.status(500).json({error: "Internal Server Error"});
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
