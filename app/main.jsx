var React = require('react');
var ReactDOM = require('react-dom');
var EmployeeList = require('./components/EmployeeList.jsx');

var EmployeeStore = require('./stores/EmployeeStore.jsx');


var initial = EmployeeStore.getEmployees();
function render(){
	ReactDOM.render(<EmployeeList employees={initial}/>, app)
}

EmployeeStore.onChange(function(employees){
	initial = employees;
	render();
})
render();


