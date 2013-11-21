function Links ($scope) {
	$scope.categories = [
		{
			category: "4chan",
			links: [
				{url:"http://4chan.org/a/", text:"/a/"},
				{url:"http://4chan.org/jp/", text:"/jp/"},
				{url:"http://4chan.org/v/", text:"/v/"},
				{url:"http://4chan.org/vg/", text:"/vg/"},
				{url:"http://4chan.org/w/", text:"/w/"},
			]
		},
		{
			category: "Reddit",
			links: [
				{url:"http://reddit.com/r/anime", text:"/anime"},
				{url:"http://reddit.com/r/leagueoflegends", text:"/LoL"},
				{url:"http://reddit.com/r/vocaloid", text:"/vocaloid"},
				{url:"http://reddit.com/r/webdev", text:"/webdev"},
			]
		},
		{
			category: "Other",
			links: [
				{url:"http://facebook.com", text:"Facebook"},
				{url:"http://twitter.com", text:"Twitter"},
				{url:"http://youtube.com", text:"Youtube"},
				{url:"http://github.com", text:"Github"},
				{url:"http://twitch.tv", text:"Twitch"},
				{url:"http://nyaa.se", text:"Nyaa"},
			]
		},
	];
}