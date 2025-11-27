const express = require('express');
const uploadImage = require('../middleware/uploadImage');
const { registerUser, loginUser } = require('../controller/user.controller');

const routes = express.Router();

routes.post("/register", uploadImage.single('profileImage'), registerUser);
routes.post("/login", loginUser);

routes.use("/users",  require("./user.routes"));

module.exports = routes;