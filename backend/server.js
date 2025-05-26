const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const server = express();
const PORT = 3001;

server.use(cors());
server.use(express.json());

const filePath = path.join(__dirname, "books.json");

server.get("/dashboard", (req, res) => {
    fs.readFile(filePath, "utf8", (err, jsonData) => {
        if (err) {
            console.error("Error during the file reading: ", err);
            return res.status(500).json({ error: "Server error" });
        }

        try {
            const data = JSON.parse(jsonData);
            res.json(data);
        } catch (parseError) {
            res.status(500).json({ error: "Error in parsing JSON file" });
        }
    });
});

server.listen(PORT, () => {
    console.log(`Server is listening at port ${PORT}`);
});