const express = require("express");
const app = express();
const port = 5000;
const programmingLanguagesRouter = require("./routes/ProgrammingLanguages");
const authRoutes = require("./routes/auth");
const financeRoutes = require("./routes/finance");
const secret = require('dotenv').config();
const dashboardRoutes = require("./routes/dashboard")
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5173');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
app.get("/", (req, res) => {
  res.json({ message: "ok" });
});
app.use("/programming-languages", programmingLanguagesRouter);
//authen 
app.use("/auth", authRoutes);
//
app.use("/dashboard", dashboardRoutes);
//finance
app.use("/finance", financeRoutes);
/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});