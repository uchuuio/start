import React from 'react';
import moment from 'moment';
import { StyleSheet } from 'react-look';

const state = {
	time: moment().format('MMMM Do YYYY, h:mm:ss a'),
};

const hour = moment().hour();
let timeOfDay;
if (hour >= 5 && hour < 11) {
	timeOfDay = 'morning';
} else if (hour >= 11 && hour < 17) {
	timeOfDay = 'day';
} else if (hour >= 17 && hour < 20) {
	timeOfDay = 'evening';
} else {
	timeOfDay = 'night';
}

StyleSheet.toCSS({
	body: {
		background: `url("https://source.unsplash.com/featured/1920x1080/?${timeOfDay}") fixed 0/cover no-repeat transparent`,
	},
});

class Time extends React.Component {
	constructor(props) {
		super(props);
		this.state = state;
	}

	componentDidMount() {
		setInterval(() => {
			const timenow = moment().format('MMMM Do YYYY, h:mm:ss a');
			this.setState({
				time: timenow,
			});
		}, 1000);
	}

	render() {
		return (
			<span className="time">It is currently <b>{ this.state.time }</b></span>
		);
	}
}

export default Time;
