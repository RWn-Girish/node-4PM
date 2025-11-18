const CategoryModel = require('../model/category.model');
const fs = require('fs');
const path = require('path');
const SubcategoryModel = require('../model/subcategory.model');

exports.addCategoryPage = async( req, res) => {
    try {
        return res.render("category/addCategory");
    } catch (error) {
        console.log(error);
        return res.redirect("/");
    }
}

exports.viewCategoryPage = async( req, res) => {
    try {
        let categories = await CategoryModel.find();
        return res.render("category/viewCategory", {categories});
    } catch (error) {
        console.log(error);
        return res.redirect("/");
    }
}

exports.addNewCategory = async( req, res) => {
    try {
       let imagePath = "";
       if(req.file){
            imagePath = `/uploads/${req.file.filename}`
       }

       let category = await CategoryModel.create({
        ...req.body,
        categoryImage: imagePath
       }) 
       if(category){
            req.flash('success', 'Category Added');
            return res.redirect("/category/add-category")
       }else{
            req.flash('error', 'Category not Added');
            return res.redirect("/category/add-category")
       }
    } catch (error) {
        console.log(error);
        return res.redirect("/");
    }
}

exports.deleteCategory = async( req, res) => {
    try {
        let category = await CategoryModel.findById(req.params.id);
        if(category.categoryImage != ""){
            let filePath = path.join(__dirname, "..", category.categoryImage);
            try {
                await fs.unlinkSync(filePath);
            } catch (error) {
                console.log("File Missing");
            }
        }
        await CategoryModel.findByIdAndDelete(req.params.id);
        await SubcategoryModel.deleteMany({category: req.params.id})
        req.flash('success', 'Category is Deleted');
        return res.redirect("/category/view-categories");
    } catch (error) {
        console.log(error);
        return res.redirect("/");
    }
}