module.exports = function (app){

	var Employees = require('./../models/Employees.js');
	var EmployeesCalls = require('./../models/EmployeesCalls.js');

	app.route('/api/employees')
		.get(function(req,res){
			EmployeesCalls.viewEmployee(req,res);
		})
		.post(function(req, res){
			EmployeesCalls.createEmployee(req,res);
		});

	app.route('/api/employees/:id')
		.delete(function(req,res){
			EmployeesCalls.deleteEmployee(req,res);
		})
		.patch(function(req,res){
			EmployeesCalls.updateEmployee(req,res);
		})
	
}