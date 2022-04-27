import { runDB } from "./config/db";
import constants from "./config/constants";
import { app } from "./config/routes";
runDB();
app.listen(constants.PORT, () =>
  console.log(`Listening on port ${constants.PORT}...`)
);
