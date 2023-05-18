const express = require("express");
const {Router} = express;
const router = Router();
const {authRoutes} = require("../routes/auth.route");
const {todoRoutes} = require("../routes/todo.route");

router.use("/auth", authRoutes)
router.use("/todo", todoRoutes)


module.exports = {
    allRoutes: router
};