import Config from './../../config';

import React from 'react';
import { render } from 'react-dom';

import SiteArea from './components/site-area.jsx';
import Time from './components/time.jsx';
import Weather from './components/weather.jsx';
import Thought from './components/thought.jsx';
import Wanikani from './components/wanikani.jsx';

// Build our app
function App() {
	return (
		<div>
			<SiteArea sites={ Config.sites } />
			<div className="summary-area">
				<div className="summary">
					<h1 className="title text-center">スタート</h1>
					<h2 className="text-center">Welcome, { Config.name }</h2>
					<h3>
						<Time />
						<Weather />
					</h3>
					<Thought />
					<Wanikani />
				</div>
			</div>
		</div>
	);
}

// Render our app
render(
	<App />,
	document.getElementById('app')
);
