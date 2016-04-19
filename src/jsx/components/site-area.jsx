import React from 'react';

const propTypes = {
	sites: React.PropTypes.array.isRequired,
};

function SiteArea({ sites }) {
	const groups = sites.map((group, i) => {
		const siteList = group.links.map((site, n) => (
			<div key={n} className="site">
				<a href={ site.url } title={ site.text }><span>{ site.text }</span></a>
			</div>
		));

		return (
			<div key={i} className="site-group">
				<h3>{ group.groupName }</h3>
				{ siteList }
			</div>
		);
	});

	return (
		<div className="sites-area">
			<div className="sites">
				{ groups }
			</div>
		</div>
	);
}

SiteArea.propTypes = propTypes;

export default SiteArea;
