# Start
## A React based Start Page for your web browser.

### Getting Started

You'll need [Node](http://nodejs.org/) & [Webpack](http://gruntjs.com/) for this!

Just clone the repo and run `npm install` for dependencies.

Next edit the data by renaming `example.config.js` to `config.js` and then edit this file. It should be fairly easy to understand but I'll break it down anyway.

`'name': '',` - Write the name you want to be identified by in the quotemarks.

`'forecastApiKey': '',` - Get an API key from [Forecast.io](https://developer.forecast.io/) and put it in there if you want weather information.
`'latitude': '51.5171',` - Add the latitude of the location you want to know the weather for. Can be left blank if you choose to let the app get your current location.
`'longitude': '-0.1062',` - Add the longitude of the location you want to know the weather for. Can be left blank if you choose to let the app get your current location.
`'units': '[celsius, fahrenheit]'` - Makes the weather information display in celsius or fahrenheit. Pick one and remove the square brackets.

`'backgroundUrl': '[anything in src/img]',` - Set this to be the image name of any of the images in `src/img/`. As a base I've added `bamboo.jpeg`, `mountain.jpeg`, `sea.jpeg` & `night.jpeg`. You can add your own to this folder too.

`'groupName': 'Social',` - The name for the following group of links
`'url': 'http://twitter.com',` - The url for one of the links
`'text': 'Twitter'` - The text for one of the links

If you want to add another link to a group add the following after the last `}` before the `]` in the links array:
```json
, {
	'url': '',
	'text': ''
}
```

To add another group add the following after the last `}` before the `]` in the sites array:

```json
, {
	'groupName': '',
	'links': [{
		'url': '',
		'text': ''
	}]
}
```

Once you've editied config.js as you want, run `webpack` in the root of the project to build the css/js and you're good to go!

Check the following link for how to set it to be your start page: http://www.guidingtech.com/8004/have-new-tab-page-open-specific-website-firefox-chrome/
