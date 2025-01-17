import mongoose from 'mongoose';
const connectDB = async (url) => {
  try {
    const connection = await mongoose.connect(url, {
      dbName: 'world-whiz',
    });
    console.log('Connected to the Database');
    return connection;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
export default connectDB;
