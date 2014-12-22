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
		      out: "prod/js/main.js"
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

		      "app/css/result.css" :[
		      "app/css/less/*.less"]
		    }
		  }
		},

		htmlmin: {                                       
		    multiple: { 

		     options: {                                
		        removeComments: true,
		        collapseWhitespace: true
		      },                                 
		      files: [{                                  
		        expand: true,
		        cwd: 'app/',                            
		        src: '*.html',                        
		        dest: 'prod/'                            
		      },{                                 
		        expand: true,
		        cwd: 'app/admin',                             
		        src: '*.html',                       		 
		        dest: 'prod/admin'                       
		      },{                                  
		        expand: true,
		        cwd: 'app/admin/html',                            
		        src: '*.html',                        
		        dest: 'prod/admin/html'                            
		      }]
		    }
		},
		cssmin: {
		  my_target: {

		    files: [{
		      expand: true,
		      cwd: 'app/css/',
		      src: ['result.css'],
		      dest: 'app/css/',
		      ext: '.min.css'
		    },{
		      expand: true,
		      cwd: 'app/admin/css/',
		      src: ['admin.css'],
		      dest: 'app/admin/css/',
		      ext: '.min.css'
		    }
		    ]
		  }
		},

		concat: {
		    options: {
		    },
		    prodcss: {
			    src: 'app/css/*.min.css',
			    dest: 'prod/css/result.css'
			}, 

			css: {
			    src: 'app/css/*.min.css',
			    dest: 'app/css/result.css'
			}, 

			adminCss: {
			    src: 'app/admin/css/*.css',
			    dest: 'prod/admin/css/admin.css'
			},  
		  },

		watch: {
			html: {
				files: ['app/*.html'],
				tasks: ['htmlmin']
			},
		    scripts: {
		        files: ['app/js/*.js','app/js/cont/*.js','app/js/libs/*.js','app/js/class/*.js','app/js/views/*.js' ],
		        tasks: ['requirejs'],
		    },
		    styles: {
		        files: ['app/css/less/*.less', 'app/admin/css/*'], // which files to watch
		        tasks: ['less','cssmin','concat']
		    }
		}

	});
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-concat');

	
	grunt.registerTask('default', ['htmlmin', 'less', 'cssmin', 'concat', 'requirejs', 'imagemin', 'watch' ]);
};