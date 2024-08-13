import http from "http";
import fs from "fs";
import path from "path";

// Importing modules from features.js (assuming valid exports)
import name, { name2, name3 } from "./features.js";

console.log(name);
console.log(name2);
console.log(name3);

// Writing and reading from a file
fs.writeFileSync("./sample.txt", 'hello world');
fs.readFile("./sample.txt", 'utf-8', (err, data) => {
    if (err) {
        console.error(err);
    } else {
        console.log(data);
    }
});

// Reading the index.html file synchronously
const home = fs.readFileSync("./index.html", "utf-8");

// Creating an HTTP server
const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.setHeader("Content-Type", "text/html");
        res.end(home);
    } else if (req.url === "/about") {
        res.setHeader("Content-Type", "text/html");
        res.end("<h1>About Page</h1>");
    } else if (req.url === "/contact") {
        res.setHeader("Content-Type", "text/html");
        res.end("<h1>Contact Page</h1>");
    } else if (req.url === "/style.css") { // Handle CSS requests
        fs.readFile("./style.css", "utf-8", (err, css) => {
            if (err) {
                res.statusCode = 500;
                res.end("Error loading CSS file");
            } else {
                res.setHeader("Content-Type", "text/css");
                res.end(css);
            }
        });
    } else {
        res.statusCode = 404;
        res.setHeader("Content-Type", "text/html");
        res.end("<h1>404 Page Not Found</h1>");
    }
});

// Starting the server
server.listen(5000, () => {
    console.log("Server is listening on http://localhost:5000");
});
