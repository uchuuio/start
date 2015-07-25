// Config File
var Config = require('../../config.js');

// Get our stylesheet
var stylesheet = require('../css/app.css');

// Require our JS
var React = require('react');
var moment = require('moment');
var $ = require('jquery');

// Build our app
var App = React.createClass({

	/*
	 * Get the initial state of the app
	 */
	getInitialState: function() {
		return({
			sites: Config.sites,
			time: moment().format('MMMM Do YYYY, h:mm:ss a'),
			thought: {
				en: '',
				jp: ''
			},
			weather: {
				enabled: false,
				summary: '',
				temperature: ''
			}
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
	 * Get the weather of the latitude & longitude.
	 */
	getWeather: function(latitude, longitude) {
		var that = this;

		var units;
		var temperatureunit;

		if (Config.location.units === 'fahrenheit') {
			units = 'us';
			temperatureunit = '°F';
		}
		else {
			units = 'uk2';
			temperatureunit = '°C';
		}

		$.ajax({
			type: 'GET',
			url: 'https://api.forecast.io/forecast/'+ Config.location.forecastApiKey +'/'+ latitude +','+ longitude +'?&units='+ units,
			jsonpCallback: 'jsonCallback',
			contentType: "application/json",
			dataType: 'jsonp',
			success: function(res) {
				var data = res;

				that.setState({
					weather: {
						enabled: true,
						summary: data.currently.summary,
						temperature: data.currently.apparentTemperature + temperatureunit
					}
				})
			},
			error: function(e) {
				console.log(e.message);
			}
		});
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

				var enThought = data.thought_en.replace('|', '<br />');
				var jpThought = data.thought_jp.replace('|', '<br />');

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
	 * Get the weather, update time & get the thought as soon as the component has mounted
	 */
	componentDidMount: function() {
		var that = this;

		if (Config.location.forecastApiKey !== '') {
			if ("geolocation" in navigator) {
				navigator.geolocation.getCurrentPosition(function(position) {
					that.getWeather(position.coords.latitude, position.coords.longitude);
				}, function(error) {
					that.getWeather(Config.location.latitude, Config.location.longitude);
				});
			} else {
				that.getWeather(Config.location.latitude, Config.location.longitude);
			}
		}

		this.getThought();
		this.updateTime();
	},

	/*
	 * Render the app
	 */
	render: function() {
		var groups = this.state.sites.map(function(group, i){

			var sites = group.links.map(function(site, i) {
				return(
					<div key={i} className="site">
						<a href={ site.url } title={ site.text }><span>{ site.text }</span></a>
					</div>
				);
			});

			return(
				<div key={i} className="site-group">
					<h3>{ group.groupName }</h3>
					{ sites }
				</div>
			);
		});

		return (
			<section>
				<div className="sites-area">
					<div className="sites">
						{ groups }
					</div>
				</div>
				<div className="summary-area">
					<div className="summary">
						<h1 className="title text-center">スタート</h1>
						<h2 className="text-center">Welcome...</h2>
						<h1 className="text-center">{ Config.name }</h1>
						<h3>
							It is currently <b>{ this.state.time }</b>
							<span className={ (this.state.weather.enabled) ? '' : 'hide' }> and the weather outside is { this.state.weather.temperature } &amp; { this.state.weather.summary }. <small>Weather data provided by <a href="http://forecast.io" title="Forecast.io">forecast.io</a></small></span>
						</h3>
						<hr />
						<h3>Thought of the day</h3>
						<p dangerouslySetInnerHTML={{
							__html: this.state.thought.jp
						}}></p>
						<p dangerouslySetInnerHTML={{
							__html: this.state.thought.en
						}}></p>
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
