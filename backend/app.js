const express = require("express");
const app = express();
const mongoose = require("mongoose");

require("dotenv/config");
const port = process.env.PORT;
const connectionString = process.env.DB_STRING;

//middleware
app.use(express.json());

mongoose
  .connect(connectionString, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("Connected to database"))
  .catch((err) => console.log("Error:" + err));

app.listen(port, () => {
  console.log(`Server is running on ${port} port.`);
});
