import React from 'react';
import { StyleSheet } from 'react-look';

import moment from 'moment';
import 'moment/locale/ja';
moment.locale('ja');

const styles = StyleSheet.create({
	monthDay: {
		fontSize: '3rem',
		margin: 0,
		textAlign: 'center',
	},
	time: {
		fontSize: '2rem',
		fontWeight: 700,
		margin: 0,
		textAlign: 'center',
	},
	dayName: {
		fontSize: '1.5rem',
		margin: 0,
		marginTop: 5,
		textAlign: 'center',
	},
});

const state = {
	month: moment().format('MMMM'),
	day: moment().format('Do'),
	time: moment().format('h:mm:ss a'),
	dayName: moment().format('dddd'),
};

class Time extends React.Component {
	constructor(props) {
		super(props);
		this.state = state;
	}

	componentDidMount() {
		setInterval(() => {
			this.setState({
				month: moment().format('MMMM'),
				day: moment().format('Do'),
				time: moment().format('H:mm:ss'),
				dayName: moment().format('dddd'),
			});
		}, 1000);
	}

	render() {
		return (
			<div>
				<h3 title="Time">時間</h3>
				<p className={styles.monthDay}>{this.state.month} {this.state.day}</p>
				<p className={styles.time}>{this.state.time}</p>
				<p className={styles.dayName}>{this.state.dayName}</p>
			</div>
		);
	}
}

export default Time;
