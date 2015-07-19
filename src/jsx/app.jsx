// Config File
var Config = require('../../config.js');

// Get our stylesheet
var stylesheet = require('../css/app.css');

// Require our JS
var React = require('react');
var moment = require('moment');
var request = require('superagent-charset');
require('superagent-jsonp')(request);

// Build our app
var App = React.createClass({
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

	updateTime: function() {
		var that = this;
		setInterval(function(){
			var timenow = moment().format('MMMM Do YYYY, h:mm:ss a');
			that.setState({time: timenow});
		}, 1000);
	},

	getWeather: function(latitude, longitude) {
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

		request
			.get('https://api.forecast.io/forecast/'+ Config.location.forecastApiKey +'/'+ latitude +','+ longitude +'?&units='+ units)
			.jsonp()
			.end(function(err, res) {
				var data = res.body;

				this.setState({
					weather: {
						enabled: true,
						summary: data.currently.summary,
						temperature: data.currently.apparentTemperature + temperatureunit
					}
				})
			}.bind(this));
	},

	getThought: function() {
		request
			.get('http://zen-api.pagu.co/')
			.charset('utf8')
			.end(function(err, res) {
				console.log(res);
				var data = res.body;

				var enThought = data.thought_en.replace('|', '<br />');
				var jpThought = data.thought_jp.replace('|', '<br />');

				this.setState({
					thought: {
						en: enThought,
						jp: jpThought
					}
				})
			});
	},

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
						<h2 className="text-center">Welcome...</h2>
						<h1 className="text-center">{ Config.name }</h1>
						<h3>
							It is currently <b>{ this.state.time }</b>
							<span className={ (this.state.weather.enabled) ? '' : 'hide' }> and the weather outside is { this.state.weather.temperature } &amp; { this.state.weather.summary }. <small>Weather data provided by <a href="http://forecast.io" title="Forecast.io">forecast.io</a></small></span>
						</h3>
						<hr />
						<h3>Thought of the day</h3>
						<p>{ this.state.thought.jp }</p>
						<p>{ this.state.thought.en }</p>
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
