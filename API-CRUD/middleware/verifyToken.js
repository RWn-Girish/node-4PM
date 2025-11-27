const jwt = require('jsonwebtoken');
const UserModel = require("../model/user.model");


exports.verifyToken = async (req, res, next) => {
    let authorization = req.headers.authorization;
    if (!authorization) {
        return res.json({ message: "not Authorized" });
    }
    let token = authorization.split(" ")[1];
    if (!token) {
        return res.json({ message: "Token Missing" });
    }

    let { id } = jwt.verify(token, process.env.SECRET_KEY)
    let user = await UserModel.findById(id);
    if (!user) {
        return res.json({ message: "Invalid Token" });
    } else {
        req.user = user;
        next();
    }

}   