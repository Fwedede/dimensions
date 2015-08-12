module.exports = function(grunt) {

   require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

   grunt.initConfig({

      pkg : grunt.file.readJSON('package.json'),

      // Checks if currently installed npm dependencies are installed in the exact same versions that are specified in package.json
      checkDependencies : {
         this : {}
      },

      prod : {
         images : 'assets/images',
         fonts : 'assets/fonts',
         javascripts : 'assets/javascripts',
         stylesheets : 'assets/stylesheets',
         controllers : 'controllers',
         views : 'views',
         docs : 'docs'
      },

      dev : {
         images : '_dev/assets/images',
         fonts : '_dev/assets/fonts',
         javascripts : '_dev/assets/javascripts',
         stylesheets : '_dev/assets/stylesheets',
         controllers : '_dev/controllers',
         views : '_dev/views',
         docs : '_dev/docs'
      },

      // Clean files and folders
      clean : {
         target : ['./assets', './controllers', './views', './docs', 'index.php']
      },

      // Copy files and folders
      copy : {
         images : {
            expand : true,
            cwd : '<%= dev.images %>/',
            src : '**/*',
            dest : '<%= prod.images %>/'
         },
         fonts : {
            expand : true,
            cwd : '<%= dev.fonts %>/',
            src : '**/*',
            dest : '<%= prod.fonts %>/'
         },
         controllers : {
            expand : true,
            cwd : '<%= dev.controllers %>/',
            src : '**/*',
            dest : '<%= prod.controllers %>/'
         },
         views : {
            expand : true,
            cwd : '<%= dev.views %>/',
            src : '**/*',
            dest : '<%= prod.views %>/'
         },
         docs : {
            expand : true,
            cwd : '<%= dev.docs %>/',
            src : '**/*',
            dest : '<%= prod.docs %>/'
         },
         index : {
            expand : true,
            cwd : '_dev/',
            src : 'index.php',
            dest : './'
         }
      },

      // Compile Sass to CSS
      sass : {
         dist : {
            options : {
               sourcemap : 'none'
            },
            files : {
               '<%= prod.stylesheets %>/styles.css' : '<%= dev.stylesheets %>/styles.scss'
            }
         }
      },

      // Compile JS to JS
      includereplace : {
         js : {
            expand : true,
            cwd : '<%= dev.javascripts %>/',
            src : 'script.js',
            dest : '<%= prod.javascripts %>/'
         }
      },

      // Minify CSS files with CSSO
      csso : {
         target : {
            files : {
               '<%= prod.stylesheets %>/styles.min.css' : '<%= prod.stylesheets %>/styles.css'
            }
         }
      },

      // Minify files with UglifyJS
      uglify : {
         js : {
            files : {
               '<%= prod.javascripts %>/script.min.js' : '<%= prod.javascripts %>/script.js'
            }
         }
      },

      // Run predefined tasks whenever watched file patterns are added, changed or deleted
      watch : {
         images : {
            files : '<%= dev.images %>/**/*',
            tasks : 'copy:images'
         },
         fonts : {
            files : '<%= dev.fonts %>/**/*',
            tasks : 'copy:fonts'
         },
         javascripts : {
            files : '<%= dev.javascripts %>/**/*',
            tasks : 'javascripts'
         },
         stylesheets : {
            files : '<%= dev.stylesheets %>/**/*',
            tasks : 'stylesheets'
         },
         controllers : {
            files : '<%= dev.controllers %>/**/*',
            tasks : 'copy:controllers'
         },
         views : {
            files : '<%= dev.views %>/**/*',
            tasks : 'views'
         },
         index : {
            files : '_dev/index.php',
            tasks : 'copy:index'
         }
      }
   });


   grunt.registerTask('stylesheets', ['sass', 'csso']);
   grunt.registerTask('javascripts', ['includereplace', 'uglify']);
   grunt.registerTask('views', ['copy:views']);

   grunt.registerTask('build', ['checkDependencies', 'clean', 'copy', 'stylesheets', 'javascripts']);
   grunt.registerTask('serve', ['build', 'watch']);
};
