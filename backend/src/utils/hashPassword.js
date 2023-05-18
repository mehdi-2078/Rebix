const {genSaltSync, compareSync, hashSync} = require('bcrypt')
const {secret} = require("../config/database");

function hashPassword(password) {
    const salt = genSaltSync(10)
    return hashSync(password, salt)
}

function comparePassword(password, hashedPassword) {
    return compareSync(password, hashedPassword)
}

function signToken(payload) {
    return jwt.sign(payload, secret)
}

function verifyToken(token) {
    return jwt.verify(token, secret)
}

module.exports = {
    hashPassword,
    comparePassword,
    signToken,
    verifyToken
}