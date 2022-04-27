import { Form, validate } from "../models/form"
import * as _ from "lodash"
import express from 'express';
const router = express.Router();
router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  let user = await Form.findOne({ email: req.body.email });
  if (user) return res.status(400).send("user already registered");
  user = new Form(_.pick(req.body, ["firstName","secondName","email",
  "gender","age","phone", "address", "result"]));
  await user.save();
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.send(_.pick(user, ["id", "firstName", "secondName", "email",
  "gender", "age", "phone", "address", "result"]));
});
export default router;