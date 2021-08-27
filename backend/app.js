const express = require("express");
const app = express();
const mongoose = require("mongoose");

require("dotenv/config");
const port = process.env.PORT;
const connectionString = process.env.DB_STRING;

//middleware
app.use(express.json());

// Routes;
// const categoriesRoutes = require("./routes/categories");
// const productsRoutes = require("./routes/products");
const usersRoutes = require("./routes/users");
// const ordersRoutes = require("./routes/orders");

// app.use("categories", categoriesRoutes);
// app.use("products", productsRoutes);
app.use("/users", usersRoutes);
// app.use("orders", ordersRoutes);

mongoose
  .connect(connectionString, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    dbName: "barakeh-database",
  })
  .then(() => console.log("Connected to database"))
  .catch((err) => console.log("Error:" + err));

app.listen(port, () => {
  console.log(`Server is running on ${port} port.`);
});
