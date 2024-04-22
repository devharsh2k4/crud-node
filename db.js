const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = "mongodb+srv://devharsh2k4:qNW37OpvGj87xHL4@cruddb.uljq7gc.mongodb.net/?retryWrites=true&w=majority&appName=CrudDB>";


const client = new MongoClient(uri,  {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    }
);

async function run() {
  try {
    
    await client.connect();

   
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
   
    await client.close();
  }
}
run().catch(console.dir);
