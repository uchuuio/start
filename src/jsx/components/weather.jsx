import Config from './../../../config';

import React from 'react';

require('es6-promise').polyfill();
import fetchJsonp from 'fetch-jsonp';

const state = {
	weather: {
		enabled: false,
		summary: '',
		temperature: '',
	},
};

class Weather extends React.Component {
	constructor(props) {
		super(props);
		this.state = state;
	}

	componentDidMount() {
		const that = this;

		if (Config.location.forecastApiKey !== '') {
			if ('geolocation' in navigator) {
				navigator.geolocation.getCurrentPosition((position) => {
					that.getWeather(position.coords.latitude, position.coords.longitude);
				}, (error) => {
					console.log(error); // eslint-disable-line
					that.getWeather(Config.location.latitude, Config.location.longitude);
				});
			} else {
				that.getWeather(Config.location.latitude, Config.location.longitude);
			}
		}
	}

	getWeather(latitude, longitude) {
		const that = this;

		let units;
		let temperatureunit;

		if (Config.location.units === 'fahrenheit') {
			units = 'us';
			temperatureunit = '°F';
		} else {
			units = 'uk2';
			temperatureunit = '°C';
		}

		fetchJsonp(`https://api.forecast.io/forecast/${Config.location.forecastApiKey}/${latitude},${longitude}?&units=${units}`)
			.then((response) => response.json())
			.then((data) => {
				that.setState({
					weather: {
						enabled: true,
						summary: data.currently.summary,
						temperature: data.currently.apparentTemperature + temperatureunit,
					},
				});
			});
	}

	render() {
		return (
			<span className={ (this.state.weather.enabled) ? '' : 'hide' }> and the weather outside is { this.state.weather.temperature } &amp; { this.state.weather.summary }. <small>Weather data provided by <a href="http://forecast.io" title="Forecast.io">forecast.io</a></small></span>
		);
	}
}

export default Weather;
