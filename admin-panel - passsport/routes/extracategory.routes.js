const express = require('express');
const { addExtraCategoryPage, getAllSubCategories } = require('../controller/extracategory.controller');

const routes = express.Router();

routes.get("/subcategory/:categoryId", getAllSubCategories)
routes.get("/add-extracategory", addExtraCategoryPage)

module.exports = routes;