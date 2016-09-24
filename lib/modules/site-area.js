import React from 'react';
import { Flex, Box } from 'reflexbox';
import { StyleSheet } from 'react-look';

const propTypes = {
	sites: React.PropTypes.array.isRequired,
};

StyleSheet.addCSS({
	'.site-group h3': {
		display: 'block',
		marginTop: 15,
	},
	'.site': {
		borderLeft: '5px solid #000',
	},
	'.site a': {
		display: 'block',
		padding: 5,
		transition: 'all .2s',
	},
	'.site a:hover': {
		backgroundColor: '#fff',
		transition: 'all .2s',
	},
});

function SiteArea({ sites }) {
	const groups = sites.map((group, i) => {
		const siteList = group.links.map((site, n) => (
			<div key={n} className="site" style={{ borderColor: site.color }}>
				<a href={ site.url } title={ site.text }><span>{ site.text }</span></a>
			</div>
		));
		const cols = 12 / sites.length;

		return (
			<Box key={i} px={2} col={cols} className="site-group">
				<h3>{ group.groupName }</h3>
				{ siteList }
			</Box>
		);
	});

	return (
		<div className="sites-area">
			<Flex>
				{ groups }
			</Flex>
		</div>
	);
}

SiteArea.propTypes = propTypes;

export default SiteArea;
