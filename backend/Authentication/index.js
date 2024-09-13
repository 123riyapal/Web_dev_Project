import express from "express";
import cookieParser from "cookie-parser";
import path from 'path';
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const app = express();

app.use(express.static(path.join(path.resolve(), "public")));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.set("view engine", "ejs");

// Database connection
mongoose.connect("mongodb://127.0.0.1:27017", {
    dbName: "authentication-project",
})
    .then(() => console.log("DB is connected"))
    .catch((e) => console.log("DB connection error:", e));

// User schema and model
const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
});
const User = mongoose.model("User", userSchema);

// Middleware for authentication
const isAuthenticated = async (req, res, next) => {
    const { token } = req.cookies;
    if (token) {
        try {
            const decoded = jwt.verify(token, "qwerty");
            req.user = await User.findById(decoded._id);
            next();
        } catch (err) {
            console.error("Token verification error:", err);
            res.render("login");
        }
    } else {
        res.redirect("/login");
    }
};

// Routes
app.get('/', isAuthenticated, (req, res) => {
    res.render("logout", { name: req.user.username });
});
app.get('/register', (req, res) => {
    res.render("register");
});
app.get('/login', (req, res) => {
    res.render("login");
});

app.post("/register", async (req, res) => {
    const { username, email, password } = req.body;

    let user = await User.findOne({ email });
    if (user) {
        return res.redirect("/login");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    user = await User.create({
        username,
        email,
        password: hashedPassword,
    });

    const token = jwt.sign({ _id: user._id }, "qwerty");
    res.cookie("token", token, {
        httpOnly: true,
        expires: new Date(Date.now() + 60 * 1000), // 1 minute
    });
    res.redirect("/");
});

app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
        return res.redirect("/register");
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.redirect("/login");
    }

    const token = jwt.sign({ _id: user._id }, "qwerty");
    res.cookie("token", token, {
        httpOnly: true,
        expires: new Date(Date.now() + 60 * 1000), // 1 minute
    });
    res.redirect("/");
});

app.get("/logout", (req, res) => {
    res.cookie("token", "null", {
        httpOnly: true,
        expires: new Date(Date.now()),
    });
    res.redirect("/");
});

// Start the server
app.listen(5000, () => {
    console.log("Server is running at http://localhost:5000");
});
