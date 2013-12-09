module.exports = function(grunt) {


    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                mangle: false
            },
            build: {
                files: {
                    'js/build/combined.min.js': 'js/build/combined.js'
                }
            }
        },
        concat: {
            options: {
                separator: ';'
            },
            build: {
                files: {
                    'js/build/combined.js': [
                        'js/src/vendor/media.match.js',
                        'js/src/vendor/jquery.transit.min.js',
                        'js/src/vendor/jquery.touchSwipe.min.js',
                        'js/src/vendor/waypoints.min.js',
                        'js/src/vendor/waypoints-sticky.min.js',
                        'js/src/main.js'
                    ]
                }
            }
        },
        compass: {
            dist: {
                options: {
                    config: 'config.rb'
                }
            }
        },
        webfont: {
            icons: {
                src: 'icons/*.svg',
                dest: 'fonts',
                destCss: 'scss/partials',
                options: {
                    stylesheet: 'scss',
                    relativeFontPath: '../fonts',
                    htmlDemo: false,
                    hashes: false
                }
            }
        },
        watch: {
            css: {
                files: '**/*.scss',
                tasks: ['compass', 'bumpVersion']
            },
            icons: {
                files: ['icons/*.svg'],
                tasks: ['icons']
            },
            js: {
                files: ['js/src/*.js', 'js/src/vendor/*.js'],
                tasks: ['js']
            }
        }
    });



    grunt.event.on('watch', function(action, filepath, target) {
        grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-webfont');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('js', ['concat', 'uglify']);
    grunt.registerTask('default', ['webfont','compass', 'js']);
    grunt.registerTask('icons', ['webfont','compass']);
};