const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: { type: "String", required: true },
    email: { type: "String", unique: true, required: true },
    password: { type: "String", required: true, minlength:6 },
});

module.exports = mongoose.model('User',userSchema);