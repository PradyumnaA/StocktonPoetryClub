import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true,
    },
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
}, { timestamps: true });

// Middleware to generate a unique id before saving
userSchema.pre('save', function(next) {
    if (!this.id) {
        // Get the first 3 letters of the username (in lowercase)
        const usernamePart = this.username.substring(0, 3).toLowerCase();

        const datePart = new Date().toISOString().replace(/[-:.T]/g, '').substring(0, 14);

        // Combine to create the unique id
        this.id = `${usernamePart}-${datePart}`;
    }
    next();
});

const User = mongoose.model('User', userSchema);
export default User;
