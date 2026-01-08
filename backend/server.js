const express = require("express");
const cors = require("cors");

const fetchRoutes = require("./routes/fetch.routes");
const analyticsRoutes = require("./routes/analytics.routes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/fetch", fetchRoutes);
app.use("/api/analytics", analyticsRoutes);

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});
