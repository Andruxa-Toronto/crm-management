// const { MongoClient, ServerApiVersion } = require('mongodb');
import {MongoClient, ServerApiVersion } from "mongodb";
const uri = process.env.DATABASE_URL || "";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  let userName = 'default';
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    const user = await client.db().collection("User").findOne({});
    userName = user?.name;
    console.log("Pinged your deployment. You successfully connected to MongoDB!", userName);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
    return userName;
  }
}
// run().catch(console.dir);

export default run;