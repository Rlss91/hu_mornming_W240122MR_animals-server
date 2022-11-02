const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/* create Users schema */
const usersSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

/*
    create collection
    create object to munipulate the data
*/
const Users = mongoose.model("users", usersSchema);

const findUserByEmail = (email) => {
  return Users.findOne({ email });
};

const createUser = (name, email, hashedPassword) => {
  const user = new Users({
    name,
    email,
    password: hashedPassword,
  });
  return user.save();
};

module.exports = {
  findUserByEmail,
  createUser,
};
