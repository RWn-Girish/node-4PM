const express = require('express');
const { addAdminPage, viewAdminPage, addAdmin, deleteAdmin, editAdmin } = require('../controller/admin.controller');
const uploadImage = require('../middleware/uploadImage');

const routes = express.Router();

routes.get("/add-admin", addAdminPage);
routes.get("/view-admin", viewAdminPage);

routes.post("/add-admin", uploadImage.single('profileImage'), addAdmin);

routes.get("/delete-admin/:id", deleteAdmin);
routes.get("/edit-admin/:id", editAdmin);
routes.post("/update-admin/:id", uploadImage.single('profileImage'), addAdmin);

module.exports = routes;