const Book = require("../models/book.model");

const addBook = async (req, res) => {
  try {
    const { title, author, rating, genre, availableForExchange, location, imageUrl , owner } = req.body;

    // Basic validation
    if (!title || !author || !location || !owner) {
      return res.status(400).json({ message: "Title, Author, and Location are required." });
    }

    const newBook = new Book({
      title,
      author,
      rating,
      genre,
      availableForExchange,
      location,
      imageUrl,
      owner
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

const getBookById = async(req,res)=>{
  try{
    const {id}=req.params();
    const book = await Book.findById(id);
    
    if(!book){
      return res.status(404).json({message:"Book not found"});
    }

    res.status(200).json(book);
  }
  catch{
    res.status(500).json({ error: 'Server error', details: err.message });
  }
}

module.exports = { addBook , getBookById};
