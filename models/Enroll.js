'use strict'

var mongoose = require('mongoose');

var EnrollSchema = new mongoose.Schema({
    department_id: String,
    employee_id: String,
    enroll_date: Date,
    rol: String,
    schedule: {
        morning: String,
        afternoon: String
    },
    payment: {
        price_hour: String,
        price_extra_hour: String
    }
});

EnrollSchema.index({'$**': 'text'});

var Enroll = mongoose.model('Enroll', EnrollSchema)

module.exports = Enroll