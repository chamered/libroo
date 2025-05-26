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

server.post("/dashboard", (req, res) => {
    const newBook = req.body;

    fs.readFile(filePath, "utf8", (err, jsonData) => {
        if (err) return res.status(500).json({ error: "Error during the file reading" });

        let books = JSON.parse(jsonData);

        const maxID = books.reduce((max, book) => (book.id > max ? book.id : max), 0);
        newBook.id = maxID + 1

        books.push(newBook);

        fs.writeFile(filePath, JSON.stringify(books, null, 2), (err) => {
            if (err) return res.status(500).json({ error: "Error during file writing" });
            res.status(201).json(newBook);
        });
    });
});

server.delete("/dashboard/:id", (req, res) => {
    const bookID = Number(req.params.id);

    fs.readFile(filePath, "utf8", (err, jsonData) => {
        if (err) return res.status(500).json({ error: "Error reading file" });

        let books = JSON.parse(jsonData);

        const filteredBooks = books.filter(book => book.id !== bookID);

        if (filteredBooks.length === books.length) {
            return res.status(404).json({ error: "Book not found" });
        }

        fs.writeFile(filePath, JSON.stringify(filteredBooks, null, 2), (err) => {
            if (err) return res.status(500).json({ error: "Error writing file" });
            res.status(200).json({ message: "Book deleted" });
        });
    });
});

server.listen(PORT, () => {
    console.log(`Server is listening at port ${PORT}`);
});