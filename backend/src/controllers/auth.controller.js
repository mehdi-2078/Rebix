const {userModel} = require("../models/user.model");
const {hashPassword, comparePassword} = require("../utils/hashPassword");
const {signToken} = require("../utils/hashPassword");


async function login(req, res, next) {
    try {
        const {phone, password} = req.body;
        const user = await userModel.findOne({
            phone
        })
        if (!user) throw new Error("User not found")
        if (comparePassword(password, user.password)) {
            await userModel.findOneAndUpdate({phone},
                {
                    lastLoginDate: Date.now()
                })
            res.send({
                lastLoginDate: Date.now(),
                fullName: user.firstName + ' ' + user.lastName,
                phone: user.phone,
                isLogin: true,
                message: 'login success',
                status: 200
            })
        } else {
            throw{
                message: 'password or phone-number is wrong',
                status: 400
            }
        }
        return user;

    } catch (err) {
        res.status(400).send(err)
        next(err);
    }
}

async function register(req, res, next) {
    try {
        const {firstName, lastName, phone, password} = req.body;
        const user = await userModel.create({
            firstName, lastName, phone, password: hashPassword(password),
        })
        res.send({
            lastLoginDate: Date.now(),
            message: 'register success',
            status: 201
        })
    } catch (err) {
        res.status(400).send(err)
        next(err);
    }
}

async function profile(req, res, next) {
    const {phone} = req.body;

    try {
        const user = await userModel.findOne({phone})
        console.log({user})
        res.send({
            fullName: user.firstName + ' ' + user.lastName,
            lastLoginDate: Date.now(),
            status: 200
        })
    } catch (err) {
        res.status(400).send(err)
        next(err);
    }
}

module.exports = {
    register, login, profile
}

