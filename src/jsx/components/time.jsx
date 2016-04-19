import React from 'react';
import moment from 'moment';

const state = {
	time: moment().format('MMMM Do YYYY, h:mm:ss a'),
};

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
