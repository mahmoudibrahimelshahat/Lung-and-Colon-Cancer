import { User } from "../models/user";
import bcrypt from "bcrypt";
import Joi from "@hapi/joi"
import * as _ from "lodash"
import  express from "express"
// const bearerToken = require('express-bearer-token');
const router = express.Router();
router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  let user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("invalid email or password.");
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) return res.status(400).send("invalid email or password.");
  const token = user.generateAuthToken()
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.send({ token });
});
function validate(req) {
  const schema = Joi.object({
    email: Joi.string().min(5).max(255).required().email(),
    // password: passwordComplexity().required() its work if you need password validation
    password: Joi.required(),
  });
  return schema.validate(req);
}
export default router;