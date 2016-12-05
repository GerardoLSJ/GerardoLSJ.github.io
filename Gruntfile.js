module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        uglify: {
            options: {
                compress: {
                    drop_console: true
                },
                mangle: false,
            },
            build: {
                files: {
                    'build/customjquery.js': ['js/jquery.min.js', 'js/jquery.slimscroll.min.js', 'js/jquery-ui.min.js', 'js/jquery.fullPage.js'],
                    'build/build.js': 'js/examples.js',
                }


            }
        },

        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'build/output.css': ['css/animate.css','css/bootstrap.min.css','css/examples.css','css/jquery.fullPage.css'],
                    'build/custom.min.css': ['css/custom.css']
                }
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    // Default task(s).
    grunt.registerTask('default', ['uglify', 'cssmin']);

};