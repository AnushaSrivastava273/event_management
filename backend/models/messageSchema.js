import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name Required!"],
        minLength: [3, "Name must contain at least 3 characters!"],
    },
    email: { // ✅ Fixed duplicate key & case-sensitive 'validate'
        type: String,
        required: [true, "Email Required!"],
        validate: [validator.isEmail, "Please provide a valid email!"]
    },
    subject: {
        type: String,
        required: [true, "Subject Required!"],
        minLength: [5, "Subject must contain at least 5 characters!"], // ✅ Fixed typo (3 -> 5)
    },
    message: {
        type: String,
        required: [true, "Message Required!"],
        minLength: [10, "Message must contain at least 10 characters!"], // ✅ Fixed typo (3 -> 10)
    },
});

// ✅ Correct export
export const Message = mongoose.model("Message", messageSchema);
