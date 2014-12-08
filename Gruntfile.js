module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		requirejs: {
		  compile: {
		    options: {
		      name: 'main',
		      include: ['build'],
		      baseUrl: "js/jsWork",
		      mainConfigFile: "js/jsWork/build.js",
		      out: "js/main.min.js"
		    }
		  }
		},

		imagemin: {
		    dynamic: {
		        files: [{
		            expand: true,
		            cwd: 'img/imgWork/',
		            src: ['**/*.{png,jpg,gif}'],
		            dest: 'img/'
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
		      "css/result.css": [
		      "css/less/source1.less", 
		      "css/less/source2.less",
		      "css/less/source3.less"]
		    }
		  }
		},

		watch: {
		    scripts: {
		        files: ['js/jsWork/*.js','js/jsWork/cont/*.js','js/jsWork/libs/*.js','js/jsWork/models/*.js','js/jsWork/views/*.js' ],
		        tasks: ['requirejs'],
		    },
		    styles: {
		        files: ['css/less/*.less'], // which files to watch
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