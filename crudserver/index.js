require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT || 5001;
const cors = require("cors");
app.use(cors());
app.use(express.json());

// database connection
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const uri = process.env.MONGODB_URL;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    // Get the database and collection on which to run the operation
    const database = client.db("simpleCrud");
    const users = database.collection("users");

    // create user
    app.post("/users", async (req, res) => {
      // get user from client
      const user = req.body;
      console.log("new user 2 be inserted", user);
      // insert user to database
      const result = await users.insertOne(user);
      // send result to client
      res.send(result);
    });

    // get all users
    app.get("/users", async (req, res) => {
      const cursor = users.find({});
      const result = await cursor.toArray();
      res.send(result);
    });

    //search query

    app.get("/users/:id", async (req, res) => {
      //       console.log(req.params);
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await users.findOne(query);
      res.send(result);
    });

    // update user
    app.patch("/users/:id", async (req, res) => {
      const id = req.params.id;

      const filter = { _id: new ObjectId(id) };
      const modifiedUser = req.body;

      const updatedDocument = {
        $set: {
          name: modifiedUser.name,
          email: modifiedUser.email,
          phone: modifiedUser.phone,
        },
      };

      const result = await users.updateOne(filter, updatedDocument);
      res.send(result);
    });

    // delete user
    app.delete("/users/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await users.deleteOne(query);
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    //     await client.db("admin").command({ ping: 1 });
    //     console.log(
    //       "Pinged your deployment. You successfully connected to MongoDB!",
    //     );
  } finally {
    // Ensures that the client will close when you finish/error
    //     await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Simple CRUD server is Serving");
});

app.listen(port, () => {
  console.log(`Server Running on ${port}`);
});
