const mongoose = require('mongoose');

const bcrypt = require('bcrypt');

const adminSchema = new mongoose.Schema(
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
        }

    },
    {
        timestamps: true,
    }
);

// play function before save into display: 'block',

adminSchema.pre("save", async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

adminSchema.statics.login = async function (CIN, password) {
    const admin = await this.findOne({ CIN });
    if (admin) {
        const auth = await bcrypt.compare(password, admin.password);
        if (auth) {
            return admin;
        }
        throw Error('incorrect password');
    }
    throw Error('incorrect CIN')
};

const AdminModel = mongoose.model("admin", adminSchema);

module.exports = AdminModel;