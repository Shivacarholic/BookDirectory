const mongoose = require("mongoose");

const bookSchema = mongoose.model("bookSchema",new mongoose.Schema(
    {
      title: {
        type: String,
        unique: true,
        required: true,
      },

      pageCount: {
        type: Number,
        required: true,
      },

      author: {
        type: String,
        required: true,
      },

      categories: {
        type: String,
        required: true,
      },
    },
    { timestamps: true }
    
  )
);

module.exports = bookSchema;
