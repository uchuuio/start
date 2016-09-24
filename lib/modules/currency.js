import { Config } from './../../site-config';

import React from 'react';
import createFragment from 'react-addons-create-fragment';
import { Flex, Box } from 'reflexbox';
import { StyleSheet } from 'react-look';

import polyfill from 'es6-promise';
import fetch from 'isomorphic-fetch';

const styles = StyleSheet.create({
	rate: {
		fontSize: '3rem',
		fontWeight: 'bold',
		margin: 0,
		textAlign: 'center',
	},
	source: {
		margin: 0,
	},
});

const currencies = Config.currency.target.split(',');

const state = {
	currency: {
		enabled: false,
		source: Config.currency.source,
		currencies,
		rates: [],
	},
};

class Currency extends React.Component {
	constructor(props) {
		super(props);
		this.state = state;
	}

	componentDidMount() {
		fetch(`https://api.fixer.io/latest?base=${Config.currency.source}&symbols=${Config.currency.target}`)
		.then((response) => response.json())
		.then((res) => {
			const rates = createFragment(res.rates);
			this.setState({
				currency: {
					enabled: true,
					source: Config.currency.source,
					currencies,
					rates,
				},
			});
		});
	}

	render() {
		return (
			<div className={ (this.state.currency.enabled) ? 'currency' : 'currency hide' }>
				<h3 title="Currency">通貨</h3>
				{this.state.currency.currencies.map((currency, i) => (
					<div key={i}>
						<p className={styles.rate}>{this.state.currency.rates[i]}</p>
						<p className={styles.source}>{this.state.currency.source} to {currency}</p>
					</div>
				))}
			</div>
		);
	}
}

export default Currency;
