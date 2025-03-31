import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const connection = () => {
  const MONGODB_URL = `mongodb+srv://${USERNAME}:${PASSWORD}@mern-todo.vnltbyh.mongodb.net/?retryWrites=true&w=majority&appName=MERN-Todo`;

  mongoose.connect(MONGODB_URL, { useNewUrlParser: true });

  mongoose.connection.on("connected", () => {
    console.log("Database connected succesfully");
  });
  mongoose.connection.on("disconnected", () => {
    console.log("Database disconnected");
  });
  mongoose.connection.on("error", (error) => {
    console.log("Error while connectiong with database ", error.message);
  });
};

export default connection;
