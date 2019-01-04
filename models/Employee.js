'use strict'

var mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

var EmployeeSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        lowercase: true
    },
    displayName: String,
    birthday: Date,
    description: String,
    password: String,
    avatar: String,
    signupDate: {
        type: Date,
        default: Date.now
    },
    lastLogin: {
        type: Array
    },
    token: String,
    state: {
        type: String,
        default: "Activo",
        enum: ['Activo', 'No activo']
    },
    enroll_ids: {
        type: Array
    }
});

EmployeeSchema.pre('save', function (next) {
    let user = this
    if (!user.isModified('password')) return next()

    bcrypt.genSalt(10, (err, salt) => {

        if (err) return next()

        bcrypt.hash(user.password, salt, null, (err, hash) => {

            if (err) return next()

            user.password = hash;
            next();
        })
    })
});

EmployeeSchema.index({'$**': 'text'});

var Employee = mongoose.model('Employee', EmployeeSchema)

module.exports = Employee