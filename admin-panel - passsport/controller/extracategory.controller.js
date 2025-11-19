const CategoryModel = require("../model/category.model");
const SubCategoryModel = require("../model/subcategory.model");


exports.getAllSubCategories = async (req, res) => {
    try {
        let subCategories = await SubCategoryModel.find({category: req.params.categoryId});
        return res.json({message: 'Fetch All Sub Categories',subCategories});
    } catch (error) {
        console.log(error);
        return res.json({message: 'Server error'});
    }
}


exports.addExtraCategoryPage = async (req, res) => {
    try {
        let categories = await CategoryModel.find();
        let subCategories = await SubCategoryModel.find();
        return res.render("extracategory/addExtraCategory", {categories, subCategories })
    } catch (error) {
        console.log(error);
        return res.redirect("/");
    }
}