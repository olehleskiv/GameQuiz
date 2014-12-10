module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		requirejs: {
		  compile: {
		    options: {
		      name: 'main',
		      include: ['build'],
		      baseUrl: "app/js",
		      mainConfigFile: "app/js/build.js",
		      out: "prod/js/main.min.js"
		    }
		  }
		},

		imagemin: {
		    dynamic: {
		        files: [{
		            expand: true,
		            cwd: 'app/img/',
		            src: ['**/*.{png,jpg,gif}'],
		            dest: 'prod/img/'
		        }]
		    }
		},

		less: {
		  development: {
		    options: {
		      compress: true,
	          yuicompress: true,
	          optimization: 2
		    },
		    files: {
		      "prod/css/result.css": [
		      "app/css/less/source1.less", 
		      "app/css/less/source2.less",
		      "app/css/less/source3.less"]
		    }
		  }
		},

		watch: {
		    scripts: {
		        files: ['app/js/*.js','app/js/cont/*.js','app/js/libs/*.js','app/js/models/*.js','app/js/views/*.js' ],
		        tasks: ['requirejs'],
		    },
		    styles: {
		        files: ['app/css/less/*.less'], // which files to watch
		        tasks: ['less'],
		    }
		}

	});
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-requirejs');

	
	grunt.registerTask('default', ['requirejs', 'imagemin', 'less', 'watch' ]);
};