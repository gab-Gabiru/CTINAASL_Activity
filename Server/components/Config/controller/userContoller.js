const user = require('../../models/userModel');

const userController = {
    //get all users
    getAllUsers: async (request, response) => {
        try{
            const users = await User.find();
            response.status(200).json(users);

        } catch (error) {
            response.status(500).json({
                message: "Error retrieving users",
                error: error.message
            });
        }
    },

    //create a new user
    createUser: async (request, response) => {
        const { name, email, password } = request.body;

        try{
            //check is a user already exists with the same email
            const existingUser = await User.findOne({ email });

            if (existingUser) {
                return response.status(409).json({
                    message: "User with this email already exists.",
                    success: false
                });
            }

            const user = new User({ 
                name: name, 
                email: email, 
                password: password 
            });

            await user.save();
            response.status(201).json({
                message: "User created successfully",
                success: true,
                user
            });

        } catch (error) {
            response.status(500).json({
                message: "Error creating user",
                error: error.message
            });
        }
    },

    updateUser:async (request, response) => {
            try{
                const user = await User.findByIdAndUpdate(request.params.id);
                if(!user){
                    return response.status(404).json({
                        message: "User not found",
                        success: false
                    });
                }
                response.status(200).json({
                    message: "User updated successfully",
                    success: true,
                    user
                });
                    const{ name, email, password }=request.body;
                    user.name = name || user.name;
                    user.email = email || user.email;
                    user.password = password || user.password;
                
            } catch (error) {
                response.status(500).json({
                    message: "Error updating user",
                    error: error.message
                });
            }
        },
        
        deleteUser: async (request, response) => {
            try{
                const user = await User.findByIdAndDelete(request.params.id);
                if(!user){
                    return response.status(404).json({
                        message: "User not found",
                        success: false
                    });
                }
                response.status(200).json({
                    message: "User deleted successfully",
                    success: true,
                    user
                });
            } catch (error) {
                response.status(500).json({
                    message: "Error deleting user",
                    error: error.message
                });
            }
    }

}
module.exports = userController;