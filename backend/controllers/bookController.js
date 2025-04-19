import Notes from "../models/bookModel.js";
export const UploadBook = async (req, res) => {
    try {
        const { name, pdf, desc } = req.body;

        const existingnote = await Notes.findOne({ name });
        if (existingnote) {
            return res.status(400).json({ success: false, message: "Note with this name already exists" });
        }

        const newNote = new Notes({ name, pdf, desc });
        await newNote.save();

        res.status(201).json({ success: true, message: "Note Uploaded Successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: "Server error" });
    }
}

export const fetchNotes = async (req, res) => {
    try {
        const notes = await Notes.find();

        if (!notes || notes.length === 0) {
            return res.status(404).json({ message: 'No notes available' });
        }
        res.status(200).json(notes);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching notes', error });
    }
};
