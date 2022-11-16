const express = require("express");
const router = express.Router();

const animalsValidation = require("../../validation/animals.validation");
const animalsSchema = require("../../models/Animals.model");

router.post("/", async (req, res) => {
  try {
    const validatedValue = await animalsValidation.addAnimalValidation(
      req.body
    );
    const img = "?";
    const animal = await animalsSchema.saveAnimal(
      validatedValue.name,
      validatedValue.race,
      validatedValue.date,
      validatedValue.gender,
      img,
      validatedValue.parents
    );
    res.status(201).json(animal);
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: err });
  }
});

module.exports = router;
