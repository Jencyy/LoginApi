import bcrypt from 'bcrypt';
import User from '../models/userModel.js';

const registerUser = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'Email already exists.' });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create and save new user
        const user = new User({ name, email, password: hashedPassword, role });
        await user.save();

        res.status(201).json({
            message: 'User registered successfully!',
            user: { id: user._id, name: user.name, email: user.email, role: user.role }
        });
    } catch (error) {
        if (error.code === 11000 && error.keyPattern.email) {
            return res.status(400).json({ error: 'Email already exists.' });
        }
        console.error('Error during user registration:', error);
        res.status(500).json({ error: 'Error registering user.' });
    }
};

export default registerUser;
