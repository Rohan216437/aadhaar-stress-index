const express = require("express");
const router = express.Router();

const { fetchEnrolmentData } = require("../services/uidai.service");
const { aggregateByDate } = require("../services/clean.service");
const { calculateASI } = require("../services/asi.service");

router.get("/asi", async (req, res) => {
  const { state, district } = req.query;

  const raw = await fetchEnrolmentData(state, district);
  const aggregated = aggregateByDate(raw);
  const asi = calculateASI(aggregated);

  res.json(asi);
});

module.exports = router;
