import  users  from "../routes/users";
import  form  from "../routes/form";
import  auth  from "../routes/auth";
import express from 'express'
var cors = require('cors');
export const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/users", users);
app.use("/api/form", form);
app.use("/api/auth", auth)