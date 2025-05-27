// routes/dashboard.js
const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

const filePath = path.join(__dirname, "../books.json");

// GET /dashboard
router.get("/", (req, res) => {
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

// POST /dashboard
router.post("/", (req, res) => {
    const newBook = req.body;

    fs.readFile(filePath, "utf8", (err, jsonData) => {
        if (err) return res.status(500).json({ error: "Error during the file reading" });

        let books = JSON.parse(jsonData);

        const maxID = books.reduce((max, book) => (book.id > max ? book.id : max), 0);
        newBook.id = maxID + 1;

        books.push(newBook);

        fs.writeFile(filePath, JSON.stringify(books, null, 2), (err) => {
            if (err) return res.status(500).json({ error: "Error during file writing" });
            res.status(201).json(newBook);
        });
    });
});

// PUT /dashboard/:id
router.put("/:id", (req, res) => {
    const bookID = Number(req.params.id);
    const updatedBook = req.body;

    fs.readFile(filePath, "utf8", (err, jsonData) => {
        if (err) return res.status(500).json({ error: "Error reading file" });

        let books = JSON.parse(jsonData);
        const bookIndex = books.findIndex(book => book.id === bookID);

        if (bookIndex === -1) {
            return res.status(404).json({ error: "Book not found" });
        }

        books[bookIndex] = { ...books[bookIndex], ...updatedBook };

        fs.writeFile(filePath, JSON.stringify(books, null, 2), (err) => {
            if (err) return res.status(500).json({ error: "Error writing file" });
            res.status(200).json(books[bookIndex]);
        });
    });
})

// DELETE /dashboard/:id
router.delete("/:id", (req, res) => {
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

module.exports = router;