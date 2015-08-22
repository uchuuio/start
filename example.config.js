var Config = {
	name: '',
	location: {
		forecastApiKey: '',
		latitude: '51.5171',
		longitude: '-0.1062',
		units: '[celsius, fahrenheit]'
	},
	wanikaniApiKey: '',
	backgroundUrl: '[anything in src/img]',
	sites: [{
		groupName: 'Social',
		links: [{
			url: 'http://twitter.com',
			text: 'Twitter'
		}, {
			url: 'http://youtube.com',
			text: 'Youtube'
		}, {
			url: 'http://twitch.tv',
			text: 'Twitch'
		}, {
			url: 'http://facebook.com',
			text: 'Facebook'
		}]
	}, {
		groupName: 'News',
		links: [{
			url: 'http://theguardian.com/uk',
			text: 'The Guardian'
		}, {
			url: 'http://news.ycombinator.com',
			text: 'Hacker News'
		}, {
			url: 'http://natalie.mu/',
			text: 'Natalie'
		}]
	}, {
		groupName: 'WebDev',
		links: [{
			url: 'http://github.com/',
			text: 'Github'
		}, {
			url: 'https://facebook.github.io/react/',
			text: 'ReactJS'
		}]
	}]
};

module.exports = Config;
