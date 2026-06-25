const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3002;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//middleware
app.use(cors());
app.use(express.json()); // Parse JSON bodies

const users = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" },
  { id: 3, name: "Charlie", email: "charlie@example.com" },
];

app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/users", (req, res) => {
  console.log("post method is working", req.body);

  const newUser = req.body;
  newUser.id = users.length + 1; // Assign a new ID
  users.push(newUser); // Add the new user to the array

  // res.json({ message: "Data received successfully", data: req.body });
  res.send({
    success: true,
    data: newUser,
    message: "User added successfully",
  });
});

app.get("/products", (req, res) => {
  res.send("Products endpoint");
});

app.get("/summary", (req, res) => {
  res.send("Summary endpoint");
});

app.get("/about", (req, res) => {
  res.send("About Us endpoint");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
