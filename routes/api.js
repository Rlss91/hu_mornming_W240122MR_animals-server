const express = require("express");
const router = express.Router();

const registerRouter = require("./api/register");

// /api/register
router.use("/register", registerRouter);

module.exports = router;
