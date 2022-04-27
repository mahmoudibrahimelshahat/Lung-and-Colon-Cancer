import { User, validate } from "../models/user"
import bcrypt from "bcrypt"
import * as _ from "lodash"
import express from 'express';
const router = express.Router();
router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send("user already registered");
  user = new User(_.pick(req.body, ["name", "email", "password", "gender"]));
  const sault =await bcrypt.genSalt(10);
  user.password= await bcrypt.hash(user.password,sault)
  await user.save();
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.send(_.pick(user, ["id", "name", "email", "gender"]));
});
export default router;