const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        id: { type: Number, required: true, unique: true },
        name: { type: String, required: true },
        email: { type: String, required: true },

},{
    versionKey: false,
    timestamps: true
});

const User = mongoose.model("user", userSchema);

module.exports = User;