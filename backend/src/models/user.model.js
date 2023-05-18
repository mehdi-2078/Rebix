const mongoose = require("mongoose");

const userSchema = new mongoose.Schema
({
    firstName: {type: String, require: true},
    lastName: {type: String, require: true},
    phone: {type: Number, require: true, unique: true},
    password: {type: String, require: true},
    // lastLoginDate: {type: Date},
    // lastLoginTime: {type: String}
}, {
    timestamps: true,
})

const userModel = mongoose.model('user', userSchema);
module.exports = {
    userModel
}