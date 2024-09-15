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

app.post("/compare", async (req, res) => {
  const data = req.body;
  // const {id1, id2} = data;

  //call supabase to get 
  //dummy
  res.status(200).json({
    message: "Data received",
    receivedData: data,
  });
});

app.listen(port, console.info(`Listening to port: ${port}`));
