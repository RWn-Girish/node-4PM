const express = require('express');
const { getAllUsers, updateUser, deleteUser } = require('../controller/user.controller');
const uploadImage = require('../middleware/uploadImage');
const { verifyToken } = require('../middleware/verifyToken');

const routes = express.Router();
routes.get("/",verifyToken, getAllUsers)

routes.put("/:id", verifyToken, uploadImage.single('profileImage'), updateUser);

routes.delete("/:id", verifyToken, deleteUser)

module.exports = routes;