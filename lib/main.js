import { Config } from './../site-config';

import React from 'react';
import { render } from 'react-dom';

import { Flex, Box } from 'reflexbox';

import { LookRoot, Presets, Plugins, StyleSheet } from 'react-look';
const composedConfig = Presets['react-dom'];
composedConfig.plugins.push(Plugins.friendlyClassName);

import SiteArea from './modules/site-area';
import Time from './modules/time';
import Weather from './modules/weather';
import Thought from './modules/thought';
import Currency from './modules/currency';

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'rgba(255, 255, 255, 0.8)',
		border: '2px solid #fff',
		borderBottomLeftRadius: 5,
		borderBottomRightRadius: 5,
		borderTop: 'none',
		color: '#111',
		fontFamily: '"Avenir Next", sans-serif',
		marginLeft: 'auto',
		marginRight: 'auto',
		width: '75%',
	},
	header: {
		textAlign: 'center',
	},
	title: {
		marginTop: 0,
	},
});
StyleSheet.addCSS({
	body: {
		background: 'url("asset/img/20160811_153930.jpg") fixed 0/cover no-repeat transparent',
	},
	h3: {
		borderBottom: '5px solid #aa201d',
		display: 'inline-block',
		marginTop: 0,
		paddingBottom: 5,
	},
	a: {
		color: '#aa201d',
		textDecoration: 'none',
		transition: 'all 0.2s',
	},
	'a:hover': {
		color: '#5D0200',
		transition: 'all 0.2s',
	},
});

// Build our app
function App() {
	return (
		<Flex column py={2} className={styles.container}>
			<Box>
				<Flex>
					<Box px={2} col={3}>
						<Thought />
					</Box>
					<Box px={2} col={3}>
						<Currency />
					</Box>
					<Box px={2} col={3}>
						<Time />
					</Box>
					<Box px={2} col={3}>
						<Weather />
					</Box>
				</Flex>
			</Box>
			<SiteArea sites={ Config.sites } />
		</Flex>
	);
}

// Render our app
render(
	<LookRoot config={composedConfig}><App /></LookRoot>,
	document.getElementById('app')
);
