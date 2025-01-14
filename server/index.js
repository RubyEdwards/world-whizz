import express from 'express';
import cors from 'cors';
import './loadEnvironment.js';
// import "express-async-errors";
import worldwhizz from './routes/countries.js';

const PORT = process.env.PORT || 5050;
console.log('🚀 ~ PORT:', PORT);

const app = express();

app.use(cors());
app.use(express.json());

app.use('/world-whizz', worldwhizz);

app.use((err, _req, res, next) => {
  res.status(500).send('Uh oh! An unexpected error occured.');
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

export default app;
