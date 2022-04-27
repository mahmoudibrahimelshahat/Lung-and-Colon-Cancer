import mongoose from "mongoose";
import constants from "./constants";
export const runDB=()=>{
  mongoose.set("debug", true); // debug mode on
  try {
    mongoose.connect(constants.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true});
  } catch (err) {
    mongoose.createConnection(constants.DB_URL);
  }
  mongoose.connection
    .once("open", () => console.log("MongoDB Running"))
    .on("error", (e) => {
      throw e;
    });
  
}
