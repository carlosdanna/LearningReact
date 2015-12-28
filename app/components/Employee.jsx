var React = require('react');
var action = require('./../actions/EmployeeActionCreator.jsx')

var Employee = React.createClass({
    displayName: 'Employee',
    toggleWatched : function(e){
    	e.preventDefault();
    	if(this.props.employees.watchSW){
    		action.unbuy(this.props.employees);
    	}else{
    		action.buy(this.props.employees);
    	}
    },

    delete: function(e){
    	e.preventDefault();
    	action.delete(this.props.employees);
    },
    render: function() {
        return (
            <div className = 'row'>
            	<div className='six columns'>
            		<h4 className={this.props.employees.watchSW ? "watchedStarWars" : ""}>{this.props.employees.name}</h4>
            	</div>
            	<div>
            		<form className="three columns" onSubmit = {this.toggleWatched}>
            			<button className={this.props.employees.watchSW ? "button-danger" : "button-primary"}>{this.props.employees.watchSW ? "Unwatch" : "Watch"}</button>
            		</form>
            		<form className="three columns" onSubmit = {this.delete}>
            			<button className = 'button-error'>&times;</button>

            		</form>
            	</div>
            </div>
        );
    }
});

module.exports = Employee;