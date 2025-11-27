const UserModel = require('../model/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.getAllUsers = async (req, res) => {
    try {
        let users = await UserModel.find();
        return res.json({ message: 'All Users Fetch Success', status: 200, result: users })
    } catch (error) {
        console.log(error);
        return res.json({ message: 'Server Error', status: 500 });
    }
}

exports.loginUser = async (req, res) => {
    try {
        let user = await UserModel.findOne({email: req.body.email});
        if(!user){
            return res.json({message: 'user not found'});
        }
        let matchpassword = await bcrypt.compare(req.body.password, user.password);
        if(!matchpassword){
            return res.json({message: 'Invalid Credentials'});
        }
        let token = jwt.sign({id: user._id}, process.env.SECRET_KEY)
        return res.json({message: 'Login Success', token}); 
    } catch (error) {
        console.log(error);
        return res.json({ message: 'Server Error', status: 500 });
    }
}

exports.registerUser = async (req, res) => {
    try {
        let user = await UserModel.findOne({email: req.body.email})
        if(user){
            return res.json({message: "User Already Registered"});
        }
        let imagepath = "";
        if (req.file) {
            imagepath = `/uploads/${req.file.filename}`;
        }
        let hashPassword = await bcrypt.hash(req.body.password, 10);
        user = await UserModel.create({
            ...req.body,
            password: hashPassword,
            profileImage: imagepath
        });
        return res.json({ message: "User Register Success" });
    } catch (error) {
        console.log(error);
        return res.json({ message: 'Server Error', status: 500 });
    }
}

exports.updateUser = async (req, res) => {
    try {
        let user = await UserModel.findById(req.params.id);
        if (!user) {
            return res.json({ message: 'User not Found' });
        }
        let imagepath = "";
        if (req.file) {
            imagepath = `/uploads/${req.file.filename}`;
        } else {
            imagepath = user.profileImage
        }
        user = await UserModel.findByIdAndUpdate(req.params.id, {
            ...req.body,
            profileImage: imagepath
        }, { new: true });
        return res.json({ message: "User Updated", result: user });
    } catch (error) {
        console.log(error);
        return res.json({ message: 'Server Error', status: 500 });
    }
}


exports.deleteUser = async (req, res) => {
    try {
        let user = await UserModel.findById(req.params.id);
        if (!user) {
            return res.json({ message: 'User not Found' });
        }
        user = await UserModel.findByIdAndDelete(req.params.id);
        return res.json({ message: "User Delete Success", result: user });
    } catch (error) {
        console.log(error);
        return res.json({ message: 'Server Error', status: 500 });
    }
}