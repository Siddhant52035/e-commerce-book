import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image:  { type: String, required: true },
  price:     { type: String, required: true, unique: true },
  desc:  { type: String, required: true }, // NOTE: Hash in production
});

const Book = mongoose.model("Book", bookSchema);
export default Book;
