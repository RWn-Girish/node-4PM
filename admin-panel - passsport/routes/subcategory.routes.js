const express = require('express');
const { addSubCategoryPage, addSubCategory } = require('../controller/subCategory.controller');
const routes = express.Router();

routes.get("/add-subcategory", addSubCategoryPage);
routes.post("/add-subcategory", addSubCategory);

module.exports = routes;