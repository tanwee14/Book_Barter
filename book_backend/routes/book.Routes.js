const express = require("express");
const router = express.Router();
const { addBook,getBookById } = require("../controllers/book.controller");

// POST /books/add
router.post("/add", addBook);
router.get("/:id",getBookById)

module.exports = router;
