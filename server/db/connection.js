import { MongoClient } from "mongodb";
const connectionString = process.env.ATLAS_URI || "";
const client = new MongoClient(connectionString);
let connection;
try {
  connection = await client.connect();
} catch (err) {
  console.error(err);
}
let db = connection.db("world-whiz");
export default db;
