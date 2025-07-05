const Book = require("../models/book.model");

const addBook = async (req, res) => {
  try {
    const { title, author, rating, genre, availableForExchange, location, imageUrl } = req.body;

    // Basic validation
    if (!title || !author || !location) {
      return res.status(400).json({ message: "Title, Author, and Location are required." });
    }

    const newBook = new Book({
      title,
      author,
      rating,
      genre,
      availableForExchange,
      location,
      imageUrl
    });

    const savedBook = await newBook.save();

    res.status(201).json({
      message: "Book added successfully",
      book: savedBook
    });

  } catch (error) {
    console.error("Error adding book:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { addBook };
