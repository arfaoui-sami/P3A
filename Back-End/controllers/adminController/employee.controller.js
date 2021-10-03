const EmployeeModel = require('../../models/employee')

module.exports.addEmployee = async (req, res) => {
    console.log(req.body)
    const { CIN, name, gouvernarate, employeeState } = req.body;
    var password = Math.random().toString(36).slice(-8);
    try {
        const employee = await EmployeeModel.create({ CIN, name, password, passwordAuto: password, gouvernarate, employeeState });
        res.status(201).json({ employee: employee._id, passowrd: password });
    } catch (err) {
        console.log(err)

        res.status(200).send({ err });
    }
};

module.exports.getAllEmployees = async (req, res) => {
    // console.log(req.body)
    // const { CIN, name, gouvernarate, employeeState } = req.body;
    // var password = Math.random().toString(36).slice(-8);
    try {
        const employees = await EmployeeModel.find({});
        res.status(201).send(employees);
    } catch (err) {
        console.log(err)

        res.status(200).send({ err });
    }
};

module.exports.getEmployee = async (req, res) => {
    try {
        const id = req.params.id;
        const employee = await EmployeeModel.find({ _id: id });
        res.status(201).json(employee);
    } catch (err) {
        console.log(err)

        res.status(200).send({ err });
    }
};