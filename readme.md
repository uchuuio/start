# Start
## A pretty simple Angular based Start Page for your web browser.

### Getting Started

Just clone the repo, run `npm install` for dependencies and then `grunt`to compile.

Edit sites by renaming `/src/js/config.sites.js` to `/src/js/sites.js` and then edit the sites.js file. It should be fairly easy to understand. The sites are split into Groups so each group has a name, inside a group you'll have links. Each link has a url and text that is displayed on the site.

### Designs

#### Light

![image](http://puu.sh/5rN8C.png)

Change line 85 in Gruntfile.coffee to `'src/less/light.less'`

#### Dark

![image](http://puu.sh/5r05Q.png)

Change line 85 in Gruntfile.coffee to `'src/less/dark.less'`


##### Remember to run `grunt` after every change!

Will work on it a bit more as everything can always be improved.