import Joi, { number, string } from "@hapi/joi";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import constants from "../config/constants";
// const passwordComplexity = require("joi-password-complexity");
const formSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  secondName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  gender: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  result: {
    type: String,
    required: true
  }

});
formSchema.methods.generateAuthToken = function () {
  //   const token = jwt.sign({ id: this.id }, config.get("jwtPrivateKey"));
  const token = jwt.sign({ id: this.id }, constants.jwtPrivateKey);
  return token;
};
const Form = mongoose.model("Form", formSchema);
function validateUser(form) {
  const schema = Joi.object({
    firstName: Joi.string().min(3).required(),
    secondName: Joi.string().min(3).required(),
    email: Joi.string().required().email(),
    // password: passwordComplexity().required() its work if you need password validation
    gender: Joi.string().required(),
    age: Joi.number().min(1).required(),
    phone: Joi.string().min(11).required(),
    address: Joi.string().min(9).required(),
    result: Joi.string().min(4).required()
  });

  return schema.validate(form);
}
exports.Form = Form;
exports.validate = validateUser;
