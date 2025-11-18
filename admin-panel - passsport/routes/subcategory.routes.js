const express = require('express');
const { addSubCategoryPage, addSubCategory, viewSubCategoryPage, editSubCategoryPage } = require('../controller/subCategory.controller');
const routes = express.Router();

routes.get("/add-subcategory", addSubCategoryPage);
routes.get("/view-subcategories", viewSubCategoryPage);
routes.post("/add-subcategory", addSubCategory);
routes.get("/edit-subcategory/:id", editSubCategoryPage);

module.exports = routes;