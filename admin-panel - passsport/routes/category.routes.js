const express = require('express');
const { addCategoryPage, addNewCategory, viewCategoryPage, deleteCategory } = require('../controller/category.controller');
const uploadImage = require('../middleware/uploadImage');
const routes = express.Router();

routes.get("/add-category", addCategoryPage);
routes.get("/view-categories", viewCategoryPage);

routes.post("/add-category", uploadImage.single('categoryImage'), addNewCategory);
routes.get("/delete-category/:id", deleteCategory);

module.exports = routes;