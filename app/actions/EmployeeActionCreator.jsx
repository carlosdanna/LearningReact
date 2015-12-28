var dispatcher = require('./../dispatcher.js');

module.exports = {
	add: function(employee){
		dispatcher.dispatch({
			payload: employee,
			type: "employee:add"
		});
	},

	delete: function(employee){
		dispatcher.dispatch({
			payload: employee,
			type: "employee:delete"
		});
	},
	buy: function(employee){
		dispatcher.dispatch({
			payload: employee,
			type: "employee:buy"
		});
	},
	unbuy: function(employee){
		dispatcher.dispatch({
			payload: employee,
			type: "employee:unbuy"
		});
	}
}