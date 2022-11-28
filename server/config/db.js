const mongoose = require("mongoose");
try {
  await mongoose.connect("mongodb://localhost:27017/Ecommerce");
  console.log("Database Connected Successfully");
} catch (err) {
  console.log("Database Not Connected");
}
