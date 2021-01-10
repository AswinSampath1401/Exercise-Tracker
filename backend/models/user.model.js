const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true, // Remove white spaces
        minlength: 3
    }
}, {
    timestamps: true // When it's created and modified
});

const User = mongoose.model('User',userSchema);

module.exports = User;
