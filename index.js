import express from 'express';
import './server/loadEnvironment.js';
import dotenv from 'dotenv';
import connectDB from './server/db/connection.js';
import cors from 'cors';
import authRouter from './server/routes/countries.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use('/world-whizz', authRouter);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.ATLAS_URI);
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.log('error =>', error);
  }
};

start();
