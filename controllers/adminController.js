import User from "../models/userModel.js";

export const changePrincipalTeacherStudent = async (req, res) => {
    try {
        // Logic to update principal, teacher, or student
        const { userId, role } = req.body;
        const user = await User.findById(userId);
        if (user) {
            user.role = role;
            await user.save();
            res.json({ message: 'User role updated successfully' });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Error updating user role' });
    }
};


