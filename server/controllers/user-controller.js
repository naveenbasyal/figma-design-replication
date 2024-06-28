import User from "../models/user.js";

const registerUser = async (req, res) => {
    const { name, email, phone, stage } = req.body;

    if (!name || !email || !phone || !stage) {
        return res.status(400).json({ message: 'All fields are required' });
    }
    try {
        const user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({ message: 'User already exists' });
        }
        const newUser = new User({ name, email, phone, stage });

        await newUser.save();
        res.status(201).json({ newUser, message: 'User registered successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export { registerUser };