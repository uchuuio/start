// Config File
var Config = require('../../../config.js');

// Require our JS
var React = require('react');
var moment = require('moment');
var $ = require('jquery');

// Build our app
var Wanikani = React.createClass({

	/*
	 * Get the initial state of the app
	 */
	getInitialState: function() {
		return({
			wanikani: {
				enabled: false,
				data: {},
			}
		})
	},

	/*
	 * Get the weather of the latitude & longitude.
	 */
	getStudyQueue: function(apiKey) {
		var that = this;

		$.ajax({
			type: 'GET',
			url: 'https://www.wanikani.com/api/user/'+apiKey+'/study-queue',
			jsonpCallback: 'jsonCallback',
			contentType: "application/json",
			dataType: 'jsonp',
			success: function(res) {
				var data = res.requested_information;

				that.setState({
					wanikani: {
						enabled: true,
						data: data
					}
				})
			},
			error: function(e) {
				console.log(e.message);
			}
		});
	},

	/*
	 * Get the weather as soon as the component has mounted
	 */
	componentDidMount: function() {
		if (Config.wanikaniApiKey !== '') {

			this.getStudyQueue(Config.wanikaniApiKey);
		}
	},

	/*
	 * Render the app
	 */
	render: function() {
		return (
			<div className={ (this.state.wanikani.enabled) ? 'wanikani' : 'wanikani hide' }>
				<hr />
				<h3>Wanikani Status</h3>
				<p>You have <b>{ this.state.wanikani.data.lessons_available }</b> Lessons Available and <b>{ this.state.wanikani.data.reviews_available }</b> Reviews to complete. Your next Review Date is { moment().to(moment.unix(this.state.wanikani.data.next_review_date)) }, please visit <a href="https://www.wanikani.com/dashboard">Wanikani</a> to complete your reviews.</p>
			</div>
		);
	}
});

module.exports = Wanikani;
