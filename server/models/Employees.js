var mongoose = require('mongoose');
var EmployeesSchema = {
	name: String,
	watchSW: Boolean,
	id: String
};

var Employees = mongoose.model('Employees', EmployeesSchema, 'employees');

module.exports = Employees;