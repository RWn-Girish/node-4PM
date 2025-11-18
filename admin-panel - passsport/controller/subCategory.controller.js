const categoryModel = require("../model/category.model");
const SubCategoryModel = require("../model/subcategory.model");

exports.addSubCategoryPage = async (req, res) => {
    try {
        let categories = await categoryModel.find();
        return res.render("subcategory/addSubcategory", {categories});
    } catch (error) {
        console.log(error);
        return res.redirect("/")
    }
}
exports.editSubCategoryPage = async (req, res) => {
    try {
        let categories = await categoryModel.find();
        let record = await SubCategoryModel.findById(req.params.id);
        return res.render("subcategory/editSubcategory", {categories, record});
    } catch (error) {
        console.log(error);
        return res.redirect("/")
    }
}

exports.viewSubCategoryPage = async (req, res) => {
    try {
        let subcategories = await SubCategoryModel.find().populate('category');
        return res.render("subcategory/viewSubcategory", {subcategories});
    } catch (error) {
        console.log(error);
        return res.redirect("/")
    }
}

exports.addSubCategory = async (req, res) => {
    try {
        let subCategory = await SubCategoryModel.create(req.body);
        if(subCategory){
            req.flash('success', 'Sub Category Added')
            return res.redirect("/subcategory/add-subcategory")
        }else{
            req.flash('error', 'Sub Category Not Added')
            return res.redirect("/subcategory/add-subcategory")
        }
    } catch (error) {
        console.log(error);
        return res.redirect("/")
    }
}