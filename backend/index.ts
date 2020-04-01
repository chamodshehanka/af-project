import app from "./App";
import config from "./src/config/config";
import { MongoHelper } from "./src/config/mongodb.config";

const PORT = config.PORT;
const MONGO_DB_URI = config.MONGO_DB_URI;

app.listen(PORT, async () => {
  console.log(`Server is listening on ${PORT}`);
  try {
    await MongoHelper.connect(`${MONGO_DB_URI}`);
    console.info(`Connected to Mongo!`);
  } catch (err) {
    console.error(`Unable to connect to Mongo!`, err);
  }
});
