const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const playersRouter = require("./routes/players");
const axios = require('axios')
const app = express();
const PORT = 8000;
require('dotenv').config();

app.use(bodyParser.json());
app.use(cors());


// Connect to MongoDB

const dbUrl =  process.env.DB_URI || '';

mongoose
  .connect(dbUrl,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });



// Mount the players router
app.use("/api/players", playersRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
