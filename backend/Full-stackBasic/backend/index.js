import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;
app.use(express.static('dist'))
// app.get("/", (req, res) => {
//     res.send("Hello, World!");
// });

app.get("/api/jokes",async (req, res) => {
    async function getData() {
        const jokes = "https://official-joke-api.appspot.com/jokes/random/5";
        try {
            const response = await fetch(jokes);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            const json = await response.json();
            res.send(json);
        } catch (error) {
            res.send(error.message);
        }
    }
    
    getData(); // Call the function to actually fetch the data
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
