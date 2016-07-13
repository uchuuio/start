import Config from './../../config';

import React from 'react';
import { render } from 'react-dom';

import { Flex, Box } from 'reflexbox';

import { LookRoot, Presets, Plugins, StyleSheet } from 'react-look';
const composedConfig = Presets['react-dom'];
composedConfig.plugins.push(Plugins.friendlyClassName);

import SiteArea from './components/site-area.jsx';
import Time from './components/time.jsx';
import Weather from './components/weather.jsx';
import Thought from './components/thought.jsx';
import Currency from './components/currency.jsx';

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
StyleSheet.toCSS({
	body: {
		background: 'url("https://source.unsplash.com/1920x1080/?japan") fixed 0/cover no-repeat transparent',
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
				<Box px={2} className={styles.header}>
					<h1 className={styles.title}>Welcome, { Config.name }</h1>
					<h3>
						<Time />
						<Weather />
					</h3>
				</Box>
				<Flex>
					<Box px={2} col={4}>
						<Thought />
					</Box>
					<Box px={2} col={8}>
						<Currency />
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
