const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

const connectDB = async () => {
  try {
    mongoose.set("useFindAndModify", false);
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected...");
  } catch (err) {
    console.log(`DB connection error: ${err}`);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
