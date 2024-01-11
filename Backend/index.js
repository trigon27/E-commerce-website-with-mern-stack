const express = require("express");
const server = express();
const mongoose = require("mongoose");
const { createProduct } = require("./controller/Product");
const productsRouter = require("./routes/Products");
//middleware
server.use(express.json());
server.get("/", (req, res) => {
  res.json({ Status: "success" });
});

server.use("/products", productsRouter.router);
//database connection
const connectToMongoDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://shaikhpc0786:YA6F6wLB3x0kyw7m@cluster0.sknggfz.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
  }
};

// Call the function to connect to MongoDB
connectToMongoDB();

server.listen(8080, () => {
  console.log("Server is started on port 8080");
});
