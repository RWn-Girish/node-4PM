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