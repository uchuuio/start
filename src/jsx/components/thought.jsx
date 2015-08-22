// Config File
var Config = require('../../../config.js');

// Require our JS
var React = require('react');
var $ = require('jquery');

// Build our app
var Thought = React.createClass({

	/*
	 * Get the initial state of the app
	 */
	getInitialState: function() {
		return({
			thought: {
				en: '',
				jp: ''
			},
		})
	},

	/*
	 * Get the thought of the day
	 */
	getThought: function() {
		var that = this;

		$.ajax({
			url: 'http://zen-api.pagu.co',
			xhrFields: {
				withCredentials: false
			},
			contentType: "application/json",
			dataType: 'json',
			success: function(res) {
				var data = res;

				var enThought = data.thought_en.replace(/\|/g, '<br />');
				var jpThought = data.thought_jp.replace(/\|/g, '<br />');

				that.setState({
					thought: {
						en: enThought,
						jp: jpThought
					}
				})
			},
			error: function(e) {
				console.log(e.message);
			}
		});
	},

	/*
	 * Get thought as soon as the component has mounted
	 */
	componentDidMount: function() {
		this.getThought();
	},

	/*
	 * Render the app
	 */
	render: function() {
		return (
			<div className={ (this.state.thought.en !== '') ? 'thought' : 'thought hide'}>
				<hr />
				<h3>Thought of the day</h3>
				<p dangerouslySetInnerHTML={{
					__html: this.state.thought.jp
				}}></p>
				<p dangerouslySetInnerHTML={{
					__html: this.state.thought.en
				}}></p>
			</div>
		);
	}
});

module.exports = Thought;
