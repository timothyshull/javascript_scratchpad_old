module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                separator: ';',
            },
            dist: {
                src: ['src/intro.js', 'src/project.js', 'src/outro.js'],
                dest: 'dist/built.js',
            },
        },
        less: {
            development: {
                options: {
                    paths: ["assets/css"]
                },
                files: {
                    "path/to/result.css": "path/to/source.less"
                }
            },
            production: {
                options: {
                    paths: ["assets/css"],
                    plugins: [
                        new require('less-plugin-autoprefix')({browsers: ["last 2 versions"]}),
                        new require('less-plugin-clean-css')(cleanCssOptions)
                    ],
                    modifyVars: {
                        imgPath: '"http://mycdn.com/path/to/images"',
                        bgColor: 'red'
                    }
                },
                files: {
                    "path/to/result.css": "path/to/source.less"
                }
            }
        },
        requirejs: {
            compile: {
                options: {
                    baseUrl: "path/to/base",
                    mainConfigFile: "path/to/config.js",
                    name: "path/to/almond", // assumes a production build using almond 
                    out: "path/to/optimized.js"
                }
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'src/<%= pkg.name %>.js',
                dest: 'build/<%= pkg.name %>.min.js'
            }
        },
        jslint: { // configure the task 
            // lint your project's server code 
            server: {
                src: [ // some example files 
                    'server/lib/*.js',
                    'server/routes/*.js',
                    'server/*.js',
                    'server/test/*.js'
                ],
                exclude: [
                    'server/config.js'
                ],
                directives: { // example directives 
                    node: true,
                    todo: true
                },
                options: {
                    edition: 'latest', // specify an edition of jslint or use 'dir/mycustom-jslint.js' for own path 
                    junit: 'out/server-junit.xml', // write the output to a JUnit XML 
                    log: 'out/server-lint.log',
                    jslintXml: 'out/server-jslint.xml',
                    errorsOnly: true, // only display errors 
                    failOnError: false, // defaults to true 
                    checkstyle: 'out/server-checkstyle.xml' // write a checkstyle-XML 
                }
            },
            // lint your project's client code 
            client: {
                src: [
                    'client/**/*.js'
                ],
                directives: {
                    browser: true,
                    predef: [
                        'jQuery'
                    ]
                },
                options: {
                    junit: 'out/client-junit.xml'
                }
            }
        },
        karma: {
            unit: {
                configFile: 'karma.conf.js'
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-concat');
    
    grunt.loadNpmTasks('grunt-contrib-less');
    
    grunt.loadNpmTasks('grunt-contrib-requirejs');

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    
    grunt.loadNpmTasks('grunt-jslint');
    
    grunt.loadNpmTasks('grunt-karma');

    // Default task(s).
    grunt.registerTask('default', ['uglify']);

};