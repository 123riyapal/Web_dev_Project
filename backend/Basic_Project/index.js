import express from "express";
import mongoose from "mongoose";
import path from "path";

const app = express();

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017", {
  dbName: "backend-project",
})
  .then(() => console.log("DB is connected"))
  .catch((e) => console.log("DB connection error:", e));

// Define Schema
const messageSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  address: String,
  postcode: String,
  country: String,
  payment: String,
});

const Message = mongoose.model("Message", messageSchema);

// Middleware
app.use(express.static(path.join(path.resolve(), "public")));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// Routes
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/add",async (req, res) => {
  await Message.create({
    name: "Riya",
    email: "exa@gmail.com",
    phone: "1234567890",
    address: "123 Street",
    postcode: "12345",
    country: "Country",
    payment: "visa"
  })
  .then(() => {
    res.send("Data added to MongoDB");
  })
  .catch((err) => {
    console.error("Error saving data to MongoDB:", err);
    res.status(500).send("Error saving data");
  });
});

app.get("/success", (req, res) => {
  res.render("success");
});

app.post("/contact", (req, res) => {
  const { name, email, phone, address, postcode, country, payment } = req.body;

  Message.create({ name, email, phone, address, postcode, country, payment })
    .then(() => {
      res.redirect("/success");
    })
    .catch((err) => {
      console.error("Error saving data to MongoDB:", err);
      res.status(500).send("Error saving data");
    });
});

app.get("/users", async (req, res) => {
  try {
    const users = await Message.find({});
    res.json({ users });
  } catch (err) {
    console.error("Error fetching users:", err);
    res.status(500).send("Error fetching users");
  }
});

app.listen(5000, () => {
  console.log("Server is running at http://localhost:5000");
});
