
const User = require('../models/userModel');

const userController = {

    // GET ALL USERS
    getAllUsers: async (request, response) => {
        try {
            const users = await User.find().select('-password');

            response.status(200).json({
                message: "Users retrieved successfully",
                success: true,
                users
            });

        } catch (error) {
            response.status(500).json({
                message: "Error retrieving users",
                error: error.message
            });
        }
    },

    // CREATE A NEW USER
    createUser: async (request, response) => {
        const { name, email, password } = request.body;

        try {
            const existingUser = await User.findOne({ email });

            if (existingUser) {
                return response.status(409).json({
                    message: "User with this email already exists.",
                    success: false
                });
            }

            const newUser = new User({
                name,
                email,
                password
            });

            await newUser.save();

            response.status(201).json({
                message: "User created successfully",
                success: true,
                user: {
                    _id: newUser._id,
                    name: newUser.name,
                    email: newUser.email
                }
            });

        } catch (error) {
            response.status(500).json({
                message: "Error creating user",
                error: error.message
            });
        }
    },

    // UPDATE USER
    updateUser: async (request, response) => {
        try {
            const { name, email, password } = request.body;

            const updatedUser = await User.findByIdAndUpdate(
                request.params.id,
                { name, email, password },
                { new: true, runValidators: true }
            ).select('-password');

            if (!updatedUser) {
                return response.status(404).json({
                    message: "User not found",
                    success: false
                });
            }

            response.status(200).json({
                message: "User updated successfully",
                success: true,
                user: updatedUser
            });

        } catch (error) {
            response.status(500).json({
                message: "Error updating user",
                error: error.message
            });
        }
    },

    // DELETE USER
    deleteUser: async (request, response) => {
        try {
            const deletedUser = await User.findByIdAndDelete(
                request.params.id
            );

            if (!deletedUser) {
                return response.status(404).json({
                    message: "User not found",
                    success: false
                });
            }

            response.status(200).json({
                message: "User deleted successfully",
                success: true,
                user: {
                    _id: deletedUser._id,
                    name: deletedUser.name,
                    email: deletedUser.email
                }
            });

        } catch (error) {
            response.status(500).json({
                message: "Error deleting user",
                error: error.message
            });
        }
    }
};

module.exports = userController;
