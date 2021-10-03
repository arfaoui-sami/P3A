const mongoose = require('mongoose');

const bcrypt = require('bcrypt');

const employeeSchema = new mongoose.Schema(
    {
        CIN: {
            type: String
        },
        name: {
            type: String,
            required: true,
        },
        password: {
            type: String
        },
        passwordAuto: {
            type: String
        },
        gouvernarate: {
            type: String
        },

        face: {
            type: String
        },
        faceID: {
            type: String
        }
    },
    {
        timestamps: true,
    }
);

// play function before save into display: 'block',

// employeeSchema.pre("save", async function (next) {
//     const salt = await bcrypt.genSalt();
//     this.password = await bcrypt.hash(this.password, salt);
//     next();
// });

// employeeSchema.statics.login = async function (CIN, password) {
//     const employee = await this.findOne({ CIN });
//     console.log('the employee : ', employee)
//     if (employee) {
//         const auth = await bcrypt.compare(password, employee.password);
//         if (auth) {
//             return employee;
//         }
//         throw Error('incorrect password');
//     }
//     throw Error('incorrect CIN')
// };

const EmployeeModel = mongoose.model("employees", employeeSchema);

module.exports = EmployeeModel;