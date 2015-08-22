// Config File
var Config = require('../../../config.js');

// Require our JS
var React = require('react');
var $ = require('jquery');

// Build our app
var Weather = React.createClass({

	/*
	 * Get the initial state of the app
	 */
	getInitialState: function() {
		return({
			weather: {
				enabled: false,
				summary: '',
				temperature: ''
			}
		})
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
	 * Get the weather as soon as the component has mounted
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
	},

	/*
	 * Render the app
	 */
	render: function() {
		return (
			<span className={ (this.state.weather.enabled) ? '' : 'hide' }> and the weather outside is { this.state.weather.temperature } &amp; { this.state.weather.summary }. <small>Weather data provided by <a href="http://forecast.io" title="Forecast.io">forecast.io</a></small></span>
		);
	}
});

module.exports = Weather;
