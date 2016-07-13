import Config from './../../../config';

import React from 'react';
import createFragment from 'react-addons-create-fragment';
import { Flex, Box } from 'reflexbox';
import { StyleSheet } from 'react-look';

require('es6-promise').polyfill();
require('isomorphic-fetch');

const styles = StyleSheet.create({
	rate: {
		fontSize: 72,
		fontWeight: 'bold',
		margin: 0,
		textAlign: 'center',
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
		console.log(this.state.currency); // eslint-disable-line
		return (
			<div className={ (this.state.currency.enabled) ? 'currency' : 'currency hide' }>
				<h3>Currency</h3>
				<Flex>
					{this.state.currency.currencies.map((currency, i) => (
						<Box key={i} col={6}>
							<p className={styles.rate}>{this.state.currency.rates[i]}</p>
							<p>{this.state.currency.source} to {currency}</p>
						</Box>
					))}
				</Flex>
			</div>
		);
	}
}

export default Currency;
