import React from 'react';
import { Flex, Box } from 'reflexbox';
import { StyleSheet } from 'react-look';

const propTypes = {
	sites: React.PropTypes.array.isRequired,
};

StyleSheet.toCSS({
	'.site-group h3': {
		borderBottom: '5px solid #aa201d',
		paddingBottom: 5,
	},
});

function SiteArea({ sites }) {
	const groups = sites.map((group, i) => {
		const siteList = group.links.map((site, n) => (
			<div key={n} className="site">
				<a href={ site.url } title={ site.text }><span>{ site.text }</span></a>
			</div>
		));

		return (
			<Box key={i} px={2} col={4} className="site-group">
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
