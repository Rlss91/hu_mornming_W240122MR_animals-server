const express = require("express");
const router = express.Router();

const multer = require("multer");
const upload = multer({ dest: "uploads/" });

router.post("/", upload.single("avatar"), function (req, res) {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
  console.log(req.file);
});

module.exports = router;
