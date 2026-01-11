const express = require("express");
const router = express.Router();

const { buildDashboard } = require("../services/dashboard.service");

router.get("/", async (req, res) => {
  try {
    const { state, district } = req.query;

    if (!state || !district) {
      return res.status(400).json({
        error: "state and district are required"
      });
    }

    const data = await buildDashboard(state, district);
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Dashboard generation failed" });
  }
});

module.exports = router;
