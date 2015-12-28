var dispatcher = require('./../dispatcher');

var helper = require('./../helpers/RestHelper')

function EmployeeStore(){
	var employees = [];
	var listeners = [];

	
	helper.get('api/employees')
		.then(function(data){
			employees = data;
			triggerListeners();
		});

	function getEmployees(){
		return employees;
	}

	
	function addEmployee(employee){
		employees.push(employee);
		triggerListeners();
		helper.post('api/employees', employee);
	}

	function deleteEmployee(employee){
		var index;
		employees.filter(function(_employee, _index){
			if(_employee.name == employee.name){
				index = _index;
			}
		})[0];
		employees.splice(index,1);
		triggerListeners();
		helper.del('api/employees/' + employee._id);

	}

	function setSWWatch(employee, isWatch){
		var employee = employees.filter(function(a){
			return a.name == employee.name;
		})[0];
		employee.watchSW = isWatch || false;
		triggerListeners();

		helper.patch('api/employees/'+employee._id, employee);
	}
	
	function onChange(listener){
		listeners.push(listener);
	}

	function triggerListeners(){
		listeners.forEach(function(listener){
			listener(employees);
		})
	}

	dispatcher.register(function(event){
		var split = event.type.split(':');
		if(split[0] === 'employee'){
			switch(split[1]){
				case "add":
					addEmployee(event.payload);
					break;
				case "delete":
					deleteEmployee(event.payload);
					break;
				case "buy":
					setSWWatch(event.payload, true);
					break;
				case "unbuy":
					setSWWatch(event.payload, false);
					break;

			}
		}
	});

	return {
		getEmployees: getEmployees,
		onChange: onChange
	}
}

module.exports = new EmployeeStore();