module.exports = (grunt) ->
	
	# Project configuration.
	grunt.initConfig

		# The package meta data.
		pkg: grunt.file.readJSON('package.json')

		# Watch files for changes.
		watch:
			gruntfile:
				files: [ 'Gruntfile.coffee' ]
				tasks: [ 'default' ]
			config:
				files: [ 'package.json' ]
				tasks: [ 'jshint' ]
			css:
				files: [ 'src/less/**' ]
				tasks: [ 'css', 'html' ]
				options:
					livereload: true
					interrupt: true
			js:
				files: [ 'src/js/**' ]
				tasks: [ 'js', 'html' ]
				options:
					livereload: true
					interrupt: true
			pages:
				files: [ 'src/*.html', 'src/*.php' ]
				tasks: [ 'html' ]
				options:
					livereload: true
					interrupt: true
			img:
				files: [ 'src/img/**' ]
				tasks: [ 'img' ]

		# Check json/js files for code errors.
		jshint:
			options:
				curly: true
				smarttabs: true
			all: [ 'src/js/**/*.js' ]

		# Check coffee files for code errors.
		coffeelint:
			options:
				'no_tabs':
					level: 'ignore'
				'indentation':
					level: 'ignore'
			all: [ 'src/coffee/**/*.coffee' ]
	
		# Clean some directories.
		clean:
			dist: [ 'assets' ]
			imgs: [ 'assets/img' ]
	
		# Copy Files/Folders
		copy:
			assets:
				files: [
					{
						expand: true
						cwd: 'src/'
						src: [
							'img/**'
						]
						dest: 'assets'
					}
				]
	
		# Compile LESS files.
		recess:
			options:
				compile: true
			bootstrap:
				src: [
					'src/vendor/bootstrap/less/bootstrap.less'
				]
				dest: 'src/compiled/css/bootstrap.css'
			site:
				src: [
					'src/less/site.less'
				]
				dest: 'src/compiled/css/site.css'

		# Concat files together.
		concat:
			bootstrapJs:
				src: [
					'src/vendor/bootstrap/js/transition.js'
					'src/vendor/bootstrap/js/alert.js'
					'src/vendor/bootstrap/js/button.js'
					'src/vendor/bootstrap/js/carousel.js'
					'src/vendor/bootstrap/js/collapse.js'
					'src/vendor/bootstrap/js/dropdown.js'
					'src/vendor/bootstrap/js/modal.js'
					'src/vendor/bootstrap/js/tooltip.js'
					'src/vendor/bootstrap/js/popover.js'
					'src/vendor/bootstrap/js/scrollspy.js'
					'src/vendor/bootstrap/js/tab.js'
					'src/vendor/bootstrap/js/affix.js'
				],
				dest: 'assets/compiled/js/bootstrap.js'
			siteCss:
				src: [
					'<%= recess.bootstrap.dest %>'
					'<%= recess.site.dest %>'
				]
				dest: 'src/compiled/css/combined.css'
			siteJs:
				src: [
					'src/vendor/jquery/js/jquery.js'
					'<%= concat.bootstrapJs.dest %>'
					'src/vendor/angular/js/angular.js'
					'src/js/site.js'
				]
				dest: 'assets/js/combined.js'

		# Removes unused CSS
		uncss:
			dist:
				files:
					'assets/css/tidy-combined.css': ['src/*.html']

		# Processes the HTML for any changes (Goes with UnCSS)
		processhtml:
			dist:
				options:
					process: true
				files:
					# Add your pages here
					'index.html': ['src/index.html'],
	
		# Minify CSS
		cssmin:
			options:
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
				keepSpecialComments: 0
			siteCss:
				src: [
					'<%= concat.siteCss.dest %>'
				]
				dest: '<%= concat.siteCss.dest %>'

		# Minify JS
		uglify:
			options:
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
				compress: true
			siteJs:
				src: [
					'<%= concat.siteJs.dest %>'
				]
				dest: '<%= concat.siteJs.dest %>'

	# These plugins provide necessary tasks.
	grunt.loadNpmTasks 'grunt-contrib-watch'
	grunt.loadNpmTasks 'grunt-contrib-jshint'
	grunt.loadNpmTasks 'grunt-coffeelint'
	grunt.loadNpmTasks 'grunt-contrib-clean'
	grunt.loadNpmTasks 'grunt-contrib-copy'
	grunt.loadNpmTasks 'grunt-recess'
	grunt.loadNpmTasks 'grunt-contrib-coffee'
	grunt.loadNpmTasks 'grunt-contrib-concat'
	grunt.loadNpmTasks 'grunt-contrib-cssmin'
	grunt.loadNpmTasks 'grunt-contrib-uglify'
	grunt.loadNpmTasks 'grunt-uncss'
	grunt.loadNpmTasks 'grunt-processhtml'

	# Default tasks.
	grunt.registerTask 'default', ['jshint', 'coffeelint', 'clean:dist', 'copy', 'recess', 'concat', 'uncss', 'processhtml']#, 'cssmin', 'uglify' ]
	
	grunt.registerTask 'css', ['recess', 'concat:siteCss']
	grunt.registerTask 'js', ['jshint', 'coffeelint', 'concat:bootstrapJs', 'concat:siteJs']
	grunt.registerTask 'html', ['uncss', 'processhtml']
	grunt.registerTask 'img', ['clean:imgs', 'copy:assets']