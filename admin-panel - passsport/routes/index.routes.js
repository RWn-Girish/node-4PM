const express = require('express');
const { dashboardpage, loginPage, loginUser, logoutUser, changePasswordPage, changePassword, forgotPasswordPage, sendOTP, verfiyOTPPage, updatePasswordPage, verifyOTP, updatePassword } = require('../controller/index.controller');
const passport = require('passport');

const routes = express.Router();

routes.get("/", loginPage);
routes.get("/dashboard", passport.setAuthenticated, dashboardpage);
routes.post("/login", passport.authenticate('local', {failureRedirect:'/'}), loginUser);
routes.get("/logout", logoutUser);
routes.get("/change-password", passport.setAuthenticated, changePasswordPage);
routes.post("/change-password", changePassword);

// Forgot Password
routes.get("/forgotPassword", forgotPasswordPage);
routes.post("/send-otp", sendOTP);
routes.get("/verify-otp", verfiyOTPPage);
routes.post("/verify-otp", verifyOTP);
routes.get("/update-password", updatePasswordPage);
routes.post("/update-password", updatePassword);

routes.use("/admin",  require('./admin.routes'));
routes.use("/category", passport.setAuthenticated,  require('./category.routes'));
routes.use("/subcategory", passport.setAuthenticated,  require('./subcategory.routes'));

module.exports = routes;