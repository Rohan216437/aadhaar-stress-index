const express = require("express");
const cors = require("cors");
require("dotenv").config();

const dashboardRoutes = require("./routes/dashboard.routes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/dashboard", dashboardRoutes);

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});
