import Joi from "@hapi/joi";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import constants from "../config/constants";
// const passwordComplexity = require("joi-password-complexity");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },


});
userSchema.methods.generateAuthToken = function () {
  //   const token = jwt.sign({ id: this.id }, config.get("jwtPrivateKey"));
  const token = jwt.sign({ id: this.id }, constants.jwtPrivateKey);
  return token;
};
const User = mongoose.model("User", userSchema);
function validateUser(user) {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string().required().email(),
    // password: passwordComplexity().required() its work if you need password validation
    password: Joi.required(),
    gender: Joi.string().required()  });
  return schema.validate(user);
}
exports.User = User;
exports.validate = validateUser;
