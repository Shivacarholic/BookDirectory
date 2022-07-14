const express = require("express");
const router = express.Router();
const _ = require("lodash");

const Book = require("../models/bookschema");

router.get("/", async (req, res) => {
  const bookList = await Book.find();
  console.log(bookList);
  res.send(bookList);
});

router.post("/", async (req, res) => {
  try {
    let book = await Book.findOne({ title: req.body.title });
    if (book) return res.status(400).send("Book already exist");

    book = new Book(
      _.pick(req.body, ["title", "pageCount", "author", "categories"])
    );
    book.save();
    res.send(_.pick(book, ["title", "pageCount", "author", "categories"]));
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

router.put("/:id", async (req, res) => {
  try {
    let book = await Book.updateOne(req.body);
    if (book) return res.status(400).send("Book Updated successfully");
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    let book = await Book.deleteOne(req.body);
    if (book) return res.status(400).send("Book Deleted successfully");
  } catch (err) {
    return res.status(400).send(err.message);
  }
});
module.exports = router;
