const express = require("express");
const router = express.Router();

const registerRouter = require("./api/register");
const confirmRegisterRouter = require("./api/confirmregister");
const loginRouter = require("./api/login");
const forgetPasswordRouter = require("./api/forgetpassword");
const resetPasswordRouter = require("./api/resetPassword");
const sendEmail = require("../config/mailer");

// /api/register
router.use("/register", registerRouter);
// /api/confirmregister
router.use("/confirmregister", confirmRegisterRouter);
// /api/login
router.use("/login", loginRouter);
// /api/forgetpassword
router.use("/forgetpassword", forgetPasswordRouter);
// /api/resetpassword
router.use("/resetpassword", resetPasswordRouter);

// /api/sendemail
router.get("/sendemail", async (req, res) => {
  await sendEmail(
    process.env.EMAIL_EMAIL,
    process.env.EMAIL_EMAIL,
    "🦄🦄🦄",
    "<h1>we did it!</h1>"
  );
});

module.exports = router;
