import mongoose from "mongoose";
import { DATABASE_URL } from "./env";

const connect = async () => {
  try {
    await mongoose.connect(DATABASE_URL, {
      autoIndex: true,
      dbName: "sanber-be-59",
      connectTimeoutMS: 10000,
    });
    return "Database connected";
  } catch (error) {
    return error;
  }
};

export default connect;
