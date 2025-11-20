const express = require("express");
const router = express.Router();
const pool = require("../server/db");

router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM employees");
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
