const express = require('express');
const { addAdminPage, viewAdminPage, addAdmin, deleteAdmin, editAdmin } = require('../controller/admin.controller');
const uploadImage = require('../middleware/uploadImage');
const passport = require('passport');

const routes = express.Router();

routes.get("/add-admin", passport.setAuthenticated, addAdminPage);
routes.get("/view-admin",passport.setAuthenticated, viewAdminPage);

routes.post("/add-admin", uploadImage.single('profileImage'), addAdmin);

routes.get("/delete-admin/:id", deleteAdmin);
routes.get("/edit-admin/:id", editAdmin);
routes.post("/update-admin/:id", uploadImage.single('profileImage'), addAdmin);

module.exports = routes;