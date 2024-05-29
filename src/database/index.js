import mongoose from "mongoose";

const configOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connectToDB = async () => {
  const connectionUrl =
    "mongodb+srv://nessclothing:pinkPanther&1023@cluster0.zfbvalw.mongodb.net/";
  mongoose
    .connect(connectionUrl, configOptions)
    .then(() => console.log("Database connected successfully. "))
    .catch((err) => console.log("DB Connection error : ${err.message}"));
};

export default connectToDB;
