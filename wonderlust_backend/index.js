const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri = process.env.MONGODB_URI;

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Connect to MongoDB
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// Start the server
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const db = client.db("wonderlust");
    const destinationCollection = db.collection("destinations");

    // get all destinations from the collection
    app.get("/destinations", async (req, res) => {
      try {
        const destinations = await destinationCollection.find({}).toArray();
        res.json(destinations);
      } catch (error) {
        res.status(500).send("Error fetching destinations");
      }
    });

    app.get("/destinations/:id", async (req, res) => {
      try {
        const { id } = req.params;
        const destination = await destinationCollection.findOne({
          _id: new ObjectId(id),
        });
        if (destination) {
          res.json(destination);
        } else {
          res.status(404).send("Destination not found");
        }
      } catch (error) {
        res.status(500).send("Error fetching destination");
      }
    });

    // insert a new destination into the collection
    app.post("/destinations", async (req, res) => {
      try {
        const destination = req.body;
        const result = await destinationCollection.insertOne(destination);
        res.json(result);
        console.log(result);
      } catch (error) {
        res.status(500).send("Error adding destination");
      }
    });
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
