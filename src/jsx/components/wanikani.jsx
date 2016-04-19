import Config from './../../../config';

import React from 'react';
import moment from 'moment';
require('es6-promise').polyfill();
require('isomorphic-fetch');

const state = {
	wanikani: {
		enabled: false,
		data: {},
	},
};

// Build our app
class Wanikani extends React.Component {
	constructor(props) {
		super(props);
		this.state = state;
	}

	componentDidMount() {
		if (Config.wanikaniApiKey !== '') {
			this.getStudyQueue(Config.wanikaniApiKey);
		}
	}

	getStudyQueue(apiKey) {
		const that = this;

		fetch(`https://www.wanikani.com/api/user/${apiKey}/study-queue`)
		.then((response) => response.json())
		.then((res) => {
			const data = res.requested_information;
			that.setState({
				wanikani: {
					enabled: true,
					data,
				},
			});
		});
	}

	render() {
		return (
			<div className={ (this.state.wanikani.enabled) ? 'wanikani' : 'wanikani hide' }>
				<hr />
				<h3>Wanikani Status</h3>
				<p>You have <b>{ this.state.wanikani.data.lessons_available }</b> Lessons Available and <b>{ this.state.wanikani.data.reviews_available }</b> Reviews to complete. Your next Review Date is { moment().to(moment.unix(this.state.wanikani.data.next_review_date)) }, please visit <a href="https://www.wanikani.com/dashboard">Wanikani</a> to complete your reviews.</p>
			</div>
		);
	}
}

export default Wanikani;
