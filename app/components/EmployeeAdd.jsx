var React = require('react');
var action = require('./../actions/EmployeeActionCreator.jsx');

var EmployeeAdd = React.createClass({
    displayName: 'EmployeeAdd',
    getInitialState: function() {
        return {
            input: ""  
        };
    },
    
    handleInputName: function(e){
    	this.setState({input: e.target.value});
    },
    
    addEmployee: function(e){
    	e.preventDefault();
    	//console.log("Adding Item!", this.state.input);
    	action.add({
    		name: this.state.input
    	});
    	this.setState({
    		input: ""
    	});
    },

    render: function() {
        return (
            <div className = 'employee-add'>
            	<form onSubmit={this.addEmployee}>
            		<input type='text' value={this.state.input} onChange = {this.handleInputName} />
            		<button>Add Item</button>
            	</form>
            </div>
        );
    }
});

module.exports = EmployeeAdd;