var React = require('react');
var Employee = require('./Employee.jsx');
var EmployeeAdd = require('./EmployeeAdd.jsx')

module.exports = React.createClass({
	render: function(){
		return (
			<div>
				<h1>Employees</h1>
				<div>
					{this.props.employees.map(function(employee,index){
						return	(<Employee employees = {employee} key={'employees'+index}/>)
					})
				}
				</div>
				<EmployeeAdd />
			</div>

		)
	}
})