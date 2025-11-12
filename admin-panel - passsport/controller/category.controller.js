const CategoryModel = require('../model/category.model');

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