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
                src: ['js/*.js'],
                dest: 'build.js'
            },

        },

        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'output.css': ['css/*.css']
                }
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    // Default task(s).
    grunt.registerTask('default', ['uglify','cssmin']);

};