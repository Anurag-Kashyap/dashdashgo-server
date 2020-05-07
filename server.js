const express = require("express");
const connectDB = require("./config/db");
var cors = require("cors");
const app = express();
const path = require('path');

// connect Database
connectDB();

// init middleware
app.use(
  express.json({
    extended: false,
  })
);

app.use(cors());

// app.get("/", (req, res) => {
//   res.send("API running");
// });

app.use("/users", require("./routes/api/users"));
app.use("/auth", require("./routes/api/auth"));
app.use("/profile", require("./routes/api/profile"));
app.use("/category", require("./routes/api/category"));
app.use("/apps", require("./routes/api/apps"));
app.use("/frequent-apps", require("./routes/api/frequentApps"));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('integratedSolution-front-end/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'integratedSolution-front-end', 'build', 'index.html'));
  })
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
