module.exports = function(grunt){

    //load all tasks with grunt-
    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
	
	//Clean
	clean: {
	      build: [
		'build'
	      ]
	},
	
	//Automate
	watch: {
	    html: {
		files: ['index.html'],
		tasks: ['htmlhint']
	    },
	    js: {
                files: ['js/validator.js'],
                tasks: ['uglify']
            }	    
	},

	//Htmlhint
	htmlhint: {
	    build: {
		options: {
		    'tag-pair': true,
		    'tagname-lowercase': true,
		    'attr-lowercase': true,
		    'attr-value-double-quotes': true,
		    'doctype-first': true,
		    'spec-char-escape': true,
		    'id-unique': true,
		    'head-script-disabled': true,
		    'style-disabled': true
		},
		src: ['index.html']
	    }
	},
	//JSHint
	jshint: {
            all: ['js/**/*.js'],
            options: {
                bitwise: true,
                curly: true,
                eqeqeq: true,
                forin: true,
                immed: true,
                newcap: true,
                noarg: true,
                noempty: true,
                nonew: true,
                plusplus: true,
                quotmark: true,
                regexp: true,
                trailing: true,
                maxparams: 7,
                maxdepth: 3,
                maxstatements: 50
            }
        },
	//Minify js
	uglify: {
	    build: {
		files: {
		    'build/js/validator.min.js': ['js/validator.js']
		}
	    }
	}
    });
    
    grunt.registerTask('default', []);
    grunt.registerTask('build', ['clean', 'htmlhint', 'jshint', 'uglify']);

};