const express = require("express");
const router = express.Router();
const { addBook } = require("../controllers/book.controller");

// POST /books/add
router.post("/add", addBook);

module.exports = router;
