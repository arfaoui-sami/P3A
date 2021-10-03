
const jwt = require("jsonwebtoken");
const { signUpErrors, signInErrors } = require("../utils/errors");

require('dotenv').config();

const maxAge = 3 * 24 * 60 * 60 * 1000;

const createToken = (data) => {
    return jwt.sign({ data }, process.env.TOKEN_SECRET, {
        expiresIn: maxAge,
    });
};
//! User SignUp
module.exports.signUp = async (req, res) => {
    console.log(req.body)
    const { name, surname, email, password, address, tel, form, companyName, town, zip, gouvernarate } = req.body;

    const UserModel = require('../models/users');
    try {
        const user = await UserModel.create({ name, surname, email, password, address, tel, form, companyName, town, zip, gouvernarate });
        res.status(201).json({ user: user._id });
    } catch (err) {
        console.log(err)
        const errors = signUpErrors(err);
        res.status(200).send({ errors });
    }
};

//! Admin SignUp
module.exports.signUpAdmin = async (req, res) => {
    console.log(req.body)
    const { CIN, name, password, } = req.body;
    const AdminModel = require("../models/admin");

    try {
        const user = await AdminModel.create({ CIN, name, password });
        res.status(201).json({ user: user._id });
    } catch (err) {
        console.log(err)
        const errors = signUpErrors(err);
        res.status(200).send({ errors });
    }
};
//? Admin SignIN

module.exports.signIn = async (req, res) => {
    const { CIN, email, password, type } = req.body;
    console.log('body : ', type);

    if (type === 'Admin') {

        const AdminModel = require("../models/admin");
        try {
            const user = await AdminModel.login(CIN, password);
            const { _id, name } = user;
            console.log('type : ', type);
            const token = createToken({ _id, name, type });
            // res.cookie("jwt", token, { httpOnly: true, maxAge });
            res.status(201).send({ id: user._id, name: user.name, token: token, type: type });
        } catch (err) {
            const errors = signInErrors(err);
            res.status(200).json({ errors });
            // res.status(200).json({ errors: { password: 'mot de passe incorrect !', cin: '' } });

        }
    } if (type === 'Empolyee') {
        try {
            const EmployeeModel = require("../models/employee");
            const user = await EmployeeModel.login(CIN, password);
            const { _id, name } = user;
            const token = createToken({ _id, name, type });
            // res.cookie("jwt", token, { httpOnly: true, maxAge });
            res.status(200).json({ id: user._id, token: token, type: type, name: name });
        } catch (err) {
            const errors = signInErrors(err);
            res.status(200).json({ errors });
        }


    };
}
module.exports.logout = (req, res) => {
    res.cookie("jwt", "", { maxAge: 1 });
    res.redirect("/");
}
