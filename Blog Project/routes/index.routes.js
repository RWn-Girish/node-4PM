const express = require('express');
const { homePage, addBlogPage, addBlog, deleteBlog } = require('../controller/blog.controller');
const uploadImage = require('../middleware/uploadImage');

const routes = express.Router();

routes.get("/", homePage);
routes.get("/add-blog", addBlogPage);
routes.post("/add-blog", uploadImage.single('blogImage'), addBlog);
routes.get("/delete-blog/:id", deleteBlog);

module.exports = routes;