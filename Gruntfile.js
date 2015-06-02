module.exports = function(grunt) {

   require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

   grunt.initConfig({

      pkg : grunt.file.readJSON('package.json'),

      // Checks if currently installed npm dependencies are installed in the exact same versions that are specified in package.json
      checkDependencies : {
         this : {}
      },

      // Settings at development folder
      dev : {
         php : '_development/controllers',
         html : '_development/views',
         style : '_development/assets/stylesheets/overlay',
         script : '_development/assets/javascripts',
         img : '_development/assets/images'
      },

      // Settings at production folder
      build : {
         php : 'controllers',
         html : 'views',
         style : 'assets/stylesheets',
         script : 'assets/javascripts',
         img : 'assets/images'
      },

      // Clean files and folders
      clean : {
         target : ['<%= build.php %>', '<%= build.html %>', 'assets/'],
         w3c : ['validation-report.json', 'validation-status.json']
      },

      // Copy files and folders
      copy : {
         img : {
            expand : true,
            cwd : '<%= dev.img %>/',
            src : '**/*',
            dest : '<%= build.img %>/'
         },
         php : {
            expand : true,
            cwd : '<%= dev.php %>/',
            src : '*.php',
            dest : '<%= build.php %>/'
         },
         js : {
            expand : true,
            cwd : '<%= dev.script %>/external',
            src : '*.js',
            dest : '<%= build.script %>/'
         }
      },

      // Concatenate files
      concat : {
         dist : {
            src : ['assets/stylesheets/geeko.css', 'assets/stylesheets/style.css'],
            dest : 'assets/stylesheets/styles.css'
         }
      },

      // Compile Sass to CSS
      sass : {
         dist : {
            options : {
               sourcemap : 'none'
            },
            files : {
               '<%= build.style %>/geeko.css' : '<%= dev.style %>/overlay.scss'
            }
         }
      },

      // Minify CSS files with CSSO
      csso : {
         target : {
            files : {
               '<%= build.style %>/geeko.min.css' : '<%= build.style %>/geeko.css'
            }
         }
      },

      // Grunt task to include files and replace variables. Allows for parameterised includes
      includereplace : {
         html : {
            expand : true,
            cwd : '<%= dev.html %>/',
            src : '*.html',
            dest : '<%= build.html %>/'
         },
         script : {
            expand : true,
            cwd : '<%= dev.script %>/',
            src : 'geeko.js',
            dest : '<%= build.script %>/'
         }
      },

      // Minify files with UglifyJS
      uglify : {
         js : {
            files : {
               '<%= build.script %>/geeko.min.js' : ['<%= build.script %>/geeko.js']
            }
         },
         parsley : {
            files : {
               '<%= dev.script %>/external/parsley-2.0.7.js' : ['<%= dev.script %>/external/parsley-2.0.7/*.js', '<%= dev.script %>/external/parsley-2.0.7/i18n/fr.js', '<%= dev.script %>/external/parsley-2.0.7/i18n/fr.extra.js']
            }
         },
         selectboxit : {
            files : {
               '<%= dev.script %>/external/selectboxit-3.8.1.js' : '<%= dev.script %>/external/selectboxit-3.8.1/*.js'
            }
         }
      },

      // Run predefined tasks whenever watched file patterns are added, changed or deleted
      watch : {
         php : {
            files : '<%= dev.php %>/**/*',
            tasks : 'copy:php'
         },
         html : {
            files : '<%= dev.html %>/**/*',
            tasks : 'html'
         },
         css : {
            files : '<%= dev.style %>/**/*',
            tasks : 'css'
         },
         img : {
            files : '<%= dev.img %>/**/*',
            tasks : 'copy:img'
         },
         js : {
            files : '<%= dev.script %>/**/*',
            tasks : 'js'
         }
      },

      // W3C html validation grunt plugin
      validation : {
         options : {
            reset : true,
            stoponerror : false,
         },
         files : {
            src : '<%= build.html %>/*.html'
         }
      }

   });

   grunt.registerTask('html', ['includereplace:html']);
   grunt.registerTask('css', ['sass', 'csso']);
   grunt.registerTask('js', ['includereplace:script', 'uglify:js']);

   grunt.registerTask('build', ['checkDependencies', 'clean', 'copy', 'css', 'html', 'js']);
   grunt.registerTask('serve', ['build', 'watch']);

   grunt.registerTask('script', ['uglify:parsley', 'uglify:selectboxit']);
   grunt.registerTask('w3c', ['validation', 'clean:w3c']);

};
