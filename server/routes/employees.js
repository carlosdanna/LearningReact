module.exports = function (app){

	var Employees = require('./../models/Employees.js');

	app.route('/api/employees')
		.get(function(req,res){
			Employees.find(function(error, doc){
				res.send(doc);
				
			})
		})
		.post(function(req, res){
			var employee = req.body;
			var db = new Employees(employee);
			db.save(function(err, data){
				res.send();
			})
		});

	app.route('/api/employees/:id')
		.delete(function(req,res){
			console.log('removing...', req.params.id);
			Employees.findOne({
				_id: req.params.id
			}).remove(function(x){
				console.log('removed.',x)
			});
		})
		.patch(function(req,res){
			Employees.findOne({
				_id: req.body._id
			}, function(error, doc){
				console.log(error);
				for (var key in req.body){
					doc[key] = req.body[key];
					
				}
				doc.save();

				res.send();
			})
		})
	
}