var Employees = require('./Employees.js');
var mongoose = require('mongoose');

var EmployeesCalls = {};


EmployeesCalls.viewEmployee = function(req,res){
	Employees.find(function(err, data){
		if(err){
			res.send(err)
		}else{
			res.send(data);
		}
	});
};

EmployeesCalls.createEmployee = function(req,res){
	var response = {};
	var employee = req.body;
	var db = new Employees(employee);
	db.save(function(err, data){
		if(err){
			response = {error: true, message: 'Something really bad happened: ' + err};
		}else{
			response = {error: false, message: 'Employee added successfully'};
		}
		console.log(response);
		res.send(response);
	})	
};

EmployeesCalls.updateEmployee = function(req,res){
	var response = {};
	Employees.update(
		{'_id': req.body._id},
		{$set: {'watchSW': req.body.watchSW}},
		function(err, data){
			if(err){
				response = {error: true, message: 'Something really bad happened: ' + err};
			}else{
				response = {error: false, message: 'Employee updated successfully'};
			}
			console.log(response);
			res.send(response);
		});
};

EmployeesCalls.deleteEmployee = function(req,res){
	var response = {};
	var id = mongoose.Types.ObjectId(req.params.id);
	Employees.remove(
		{'_id': id},
		function(err, data){
		if(err){
			response = {error: true, message: 'Something really bad happened: ' + err};
		}else{
			response = {error: false, message: 'Employee delete successfully'};
		}
		console.log(response);
		res.send(response);
	});
};



module.exports = EmployeesCalls; 