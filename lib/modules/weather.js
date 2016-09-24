import { Config } from './../../site-config';

import React from 'react';
import { StyleSheet } from 'react-look';
import fetchJsonp from 'fetch-jsonp';
import Skycons from 'react-skycons';

const styles = StyleSheet.create({
	icon: {
		marginTop: -60,
		height: '80% !important',
	},
	temperature: {
		fontSize: '3rem',
		margin: 0,
		textAlign: 'center',
	},
	summary: {
		fontSize: '1.5rem',
		margin: 0,
		textAlign: 'center',
	},
	via: {
		margin: 0,
		textAlign: 'right',
	},
});

const state = {
	weather: {
		summary: '',
		icon: 'CLEAR_DAY',
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

		fetchJsonp(`https://api.darksky.net/forecast/${Config.location.forecastApiKey}/${latitude},${longitude}?&units=${units}&exclude=minutely,hourly,daily,alerts,flags`)
			.then((response) => response.json())
			.then((data) => {
				const icon = data.currently.icon.toUpperCase().replace(/[-]/g, '_');
				that.setState({
					weather: {
						summary: data.currently.summary,
						icon,
						temperature: data.currently.apparentTemperature + temperatureunit,
					},
				});
			});
	}

	render() {
		return (
			<div>
				<h3 title="Weather">天気</h3>
				<Skycons className={styles.icon} color="#111" icon={this.state.weather.icon} autoplay={true}/>
				<p className={styles.temperature}>{this.state.weather.temperature}</p>
				<p className={styles.summary}>{this.state.weather.summary}</p>
				<p className={styles.via}><a href="https://darksky.net/poweredby/"><small>via Dark Sky</small></a></p>
			</div>
		);
	}
}

export default Weather;
