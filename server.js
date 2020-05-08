const express = require("express");
const path = require("path");
const connectDB = require("./config/db");
var cors = require("cors");
const app = express();

// connect Database
connectDB();

// init middleware
app.use(
  express.json({
    extended: false,
  })
);

// app.use(express.static(path.join(__dirname, "build")));

// app.get("/", function (req, res) {
//   res.sendFile(path.join(__dirname, "build", "index.html"));
// });

app.use(cors());

app.use("/users", require("./routes/api/users"));
app.use("/auth", require("./routes/api/auth"));
app.use("/profile", require("./routes/api/profile"));
app.use("/category", require("./routes/api/category"));
app.use("/apps", require("./routes/api/apps"));
app.use("/frequent-apps", require("./routes/api/frequentApps"));
app.use("/track-registration", require("./routes/api/registrationTracker"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("./build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
