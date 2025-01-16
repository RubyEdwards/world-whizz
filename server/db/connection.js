import mongoose from "mongoose";
const connectDB = (url) => {
  return mongoose
    .connect(url, {
      dbName: "world-whiz",
    })
    .then(() => {
      console.log("Connected to the Database.");
    })
    .catch((err) => console.error(err));
};
export default connectDB;
