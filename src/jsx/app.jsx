// Config File
var Config = require('../../config.js');

// Get our stylesheet
var stylesheet = require('../css/app.css');

// Require our JS
var React = require('react');

// Require our components
var SiteArea = require('./components/site-area.jsx');
var Time = require('./components/time.jsx');
var Weather = require('./components/weather.jsx');
var Thought = require('./components/thought.jsx');
var Wanikani = require('./components/wanikani.jsx');

// Build our app
var App = React.createClass({

	/*
	 * Render the app
	 */
	render: function() {
		return (
			<section>
				<SiteArea sites={ Config.sites } />
				<div className="summary-area">
					<div className="summary">
						<h1 className="title text-center">スタート</h1>
						<h2 className="text-center">Welcome, { Config.name }</h2>
						<h3>
							<Time />
							<Weather />
						</h3>
						<Thought />
						<Wanikani />
					</div>
				</div>
			</section>
		);
	}
});

// Render our app
React.render(
	<App />,
	document.getElementById('app')
);
