const express = require("express");
const router = express.Router();
const { addBook,getBookById , changeBookDescription} = require("../controllers/book.controller");

// POST /books/add
router.post("/add", addBook);
router.get("/:id",getBookById)
router.patch("/:id/description", changeBookDescription);

module.exports = router;
