const BlogModel = require("../model/blog.model");
const path = require('path');
const fs = require('fs');


exports.homePage = async (req, res) => {
    try {
        let search = "";
        
        if (req.query && req.query.search) {
            search = req.query.search

        }
        let findData = {
            $or: [
                { title: { $regex: search, $options: "i" } },
                { category: { $regex: search, $options: "i" } },
                { author: { $regex: search, $options: "i" } },
                { description: { $regex: search, $options: "i" } },
                { postDate: { $regex: search, $options: "i" } },
            ]
        }
        let blogs = await BlogModel.find(findData)

        return res.render("index", { blogs });
    } catch (error) {
        console.log("Error: ", error);
        return res.redirect("/");
    }
}

exports.addBlogPage = async (req, res) => {
    try {
        return res.render("addBlog");
    } catch (error) {
        console.log("Error: ", error);
        return res.redirect("/");
    }
}
exports.addBlog = async (req, res) => {
    try {
        let imagepath = "";
        if (req.file) {
            imagepath = `/uploads/${req.file.filename}`;
        }
        let blog = await BlogModel.create({
            ...req.body,
            blogImage: imagepath
        });
        if (blog) {
            console.log("Blog Added Success ");
            return res.redirect("/");
        } else {
            console.log("Something Wrong ");
            return res.redirect("/add-blog");
        }
    } catch (error) {
        console.log("Error: ", error);
        return res.redirect("/");
    }
}

exports.deleteBlog = async (req, res) => {
    try {
        let id = req.params.id;
        let blog = await BlogModel.findById(id);
        if (!blog) {
            console.log('Blog is not Found');
            return res.redirect("/")
        }
        if (blog.blogImage != "") {
            let imagePath = path.join(__dirname, "..", blog.blogImage);
            try {
                await fs.unlinkSync(imagePath);
            } catch (error) {
                console.log('File Missing');
            }
        }
        await BlogModel.findByIdAndDelete(id);
        console.log('Blog Delete');
        return res.redirect("/");

    } catch (error) {
        console.log("Error: ", error);
        return res.redirect("/");
    }
}