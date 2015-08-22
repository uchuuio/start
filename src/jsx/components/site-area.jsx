// Config File
var Config = require('../../../config.js');

// Require our JS
var React = require('react');

// Build our app
var SiteArea = React.createClass({

	/*
	 * Render the app
	 */
	render: function() {
		var groups = this.props.sites.map(function(group, i){

			var sites = group.links.map(function(site, i) {
				return(
					<div key={i} className="site">
						<a href={ site.url } title={ site.text }><span>{ site.text }</span></a>
					</div>
				);
			});

			return(
				<div key={i} className="site-group">
					<h3>{ group.groupName }</h3>
					{ sites }
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
});

module.exports = SiteArea;
