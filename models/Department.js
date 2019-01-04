'use strict'

var mongoose = require('mongoose');

var DepartmentSchema = new mongoose.Schema({
    displayName: String,
    description: String,
    date: Date,
    state: {
        type: String,
        default: "Activo",
        enum: ['Activo', 'No activo']
    }
});

DepartmentSchema.index({'$**': 'text'});

var Department = mongoose.model('Department', DepartmentSchema)

module.exports = Department