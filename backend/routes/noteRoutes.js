import express from "express";

import { UploadBook, UserUploads, fetchNotes } from "../controllers/bookController.js";

const router = express.Router();

// Route to upload a PDF/book
router.post("/upload-pdf", UploadBook);

// Route to get all notes
router.get("/fetch-notes", fetchNotes);
router.get("/user-upload", UserUploads);

export default router;
