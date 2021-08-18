const express = require("express");

const app = express();

//TODO: port should be in .env file.
const port = 3310;

app.listen(port, () => {
  console.log(`Server is running on ${port} port.`);
});
