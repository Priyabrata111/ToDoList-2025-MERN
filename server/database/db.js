import mongoose from "mongoose";

export const connection = () => {
  MONGODB_URL =
    "mongodb+srv://<db_username>:<db_password>@mern-todo.vnltbyh.mongodb.net/?retryWrites=true&w=majority&appName=MERN-Todo";

  mongoose.connect(MONGODB_URL, { useNewUrlParser: true });
};
