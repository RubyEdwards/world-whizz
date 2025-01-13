import { MongoClient, ServerApiVersion } from 'mongodb';

const uri =
  process.env.ATLAS_URI ||
  'mongodb+srv://WiccanWolf:MJC0LrGKwTtjoMM8@world-whiz.9lwjw.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

try {
  await client.connect();
  await client.db('admin').command({ ping: 1 });
  console.log('Successfully connected to World Whiz!');
} catch (err) {
  console.error(err);
}

let db = client.db('world-whiz');

export default db;
