// Config File
var Config = require('../../../config.js');

// Require our JS
var React = require('react');
var moment = require('moment');

// Build our app
var Time = React.createClass({

	/*
	 * Get the initial state of the app
	 */
	getInitialState: function() {
		return({
			time: moment().format('MMMM Do YYYY, h:mm:ss a'),
		})
	},

	/*
	 * Update the time every second
	 */
	updateTime: function() {
		var that = this;
		setInterval(function(){
			var timenow = moment().format('MMMM Do YYYY, h:mm:ss a');
			that.setState({time: timenow});
		}, 1000);
	},

	/*
	 * Update the time as soon as the component has mounted
	 */
	componentDidMount: function() {
		this.updateTime();
	},

	/*
	 * Render the app
	 */
	render: function() {
		return (
			<span className="time">It is currently <b>{ this.state.time }</b></span>
		);
	}
});

module.exports = Time;
