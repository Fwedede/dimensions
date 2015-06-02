module.exports = function(grunt) {

   require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

   grunt.initConfig({

      pkg : grunt.file.readJSON('package.json'),

      // Checks if currently installed npm dependencies are installed in the exact same versions that are specified in package.json
      checkDependencies : {
         this : {}
      },

      prod : {
         img : 'assets/img',
         font : 'assets/fonts',
         js : 'assets/script',
         css : 'assets/stylesheet',
         view : 'assets/view'
      },

      dev : {
         img : 'dev/assets/img',
         font : 'dev/assets/fonts',
         js : 'dev/assets/script',
         css : 'dev/assets/stylesheet',
         view : 'dev/assets/view'
      },

      // Clean files and folders
      clean : {
         target : ['./assets' , 'index.php']
      },

      // Copy files and folders
      copy : {
         img : {
            expand : true,
            cwd : '<%= dev.img %>/',
            src : '**/*',
            dest : '<%= prod.img %>/'
         },
         view : {
            expand : true,
            cwd : '<%= dev.view %>/',
            src : '*',
            dest : '<%= prod.view %>/'
         },
         font : {
            expand : true,
            cwd : '<%= dev.font %>/',
            src : '*',
            dest : '<%= prod.font %>/'
         },
         index : {
            expand : true,
            cwd : 'dev/',
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
               '<%= prod.css %>/styles.css' : '<%= dev.css %>/styles.scss'
            }
         }
      },

      // Compile JS to JS
      includereplace : {
         js : {
            expand : true,
            cwd : '<%= dev.js %>/',
            src : 'script.js',
            dest : '<%= prod.js %>/'
         }
      },

      // Minify CSS files with CSSO
      csso : {
         target : {
            files : {
               '<%= prod.css %>/styles.min.css' : '<%= prod.css %>/styles.css'
            }
         }
      },

      // Minify files with UglifyJS @TODO
      uglify : {
         js : {
            files : {
               '<%= prod.js %>/script.min.js' : '<%= prod.js %>/script.js'
            }
         }
      },

      // Run predefined tasks whenever watched file patterns are added, changed or deleted
      watch : {
         view : {
            files : ['<%= dev.view %>/**/*', 'dev/index.php'],
            tasks : 'view'
         },
         css : {
            files : '<%= dev.css %>/**/*',
            tasks : 'css'
         },
         img : {
            files : '<%= dev.img %>/**/*',
            tasks : 'copy:img'
         },
         js : {
            files : '<%= dev.js %>/**/*',
            tasks : 'js'
         }
      }
   });


   grunt.registerTask('css', ['sass', 'csso']);
   grunt.registerTask('js', ['includereplace', 'uglify']);
   grunt.registerTask('view', ['copy:index', 'copy:view']);

   grunt.registerTask('build', ['checkDependencies', 'clean', 'copy', 'css', 'js']);
   grunt.registerTask('serve', ['build', 'watch']);


};
