const express = require("express");
const router = express.Router();
const registerValidation = require("../../validation/register.validation");
const usersModel = require("../../models/Users.model");

router.post("/", async (req, res) => {
  try {
    const validatedValue = await registerValidation(req.body);
    console.log("validatedValue", validatedValue);
    const user = await usersModel.findUserByEmail(validatedValue.email);
    if (user) {
      throw "email already exists";
      // create error and pass over to catch
      //the string will be err in catch
    }
  } catch (err) {
    console.log(err);
    res.status(400).json({ err }); //.json(...) like send but convert the data to json
  }
});

module.exports = router;
