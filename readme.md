# Start
## A pretty simple Angular based Start Page for your web browser.

### Getting Started

You'll need [Node](http://nodejs.org/) & [Grunt](http://gruntjs.com/) for this!

Just clone the repo, run `npm install` for dependencies and then `grunt`to compile.

Edit sites by renaming `/src/js/config.sites.js` to `/src/js/sites.js` and then edit the sites.js file. It should be fairly easy to understand. The sites are split into Groups so each group has a name, inside a group you'll have links. Each link has a url and text that is displayed on the site.

To edit the markup of the site, edit `src/index.html` NOT `index.html`. The root file will be overwritten on every `grunt`. To edit the design just edit `site.less`.

##### Remember to run `grunt` after every change!

### Designs

#### Base (Light)

![image](http://puu.sh/61hOp.png)

Will work on it a bit more as everything can always be improved.