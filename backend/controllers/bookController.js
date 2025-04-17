export const UploadBook = async (req, res) => {
    try {
        const { name, image, price, desc } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ success: false, message: "Email already exists" });
        }

        const newUser = new User({ firstName, lastName, email, password });
        await newUser.save();

        res.status(201).json({ success: true, message: "User registered successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: "Server error" });
    }
}