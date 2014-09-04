module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        includePaths: ['bower_components/foundation/scss']
      },
      dist: {
        options: {
          outputStyle: 'default'
        },
        files: {
          'css/app.css': 'scss/app.scss'
        }        
      }
    },

    clean: {
        deploy: ['deploy/']
    },

    copy: {
      main: {
        files: [
          // copy css, js & images
          {expand: true, src: ['index.html','css/**','img/**','js/**'], dest: 'deploy/'},
          // copy js dependancies
          {expand: true, cwd: 'bower_components/', src: ['{jquery,foundation}/**/*.min.js'], dest: 'deploy/js/'},
          {expand: true, cwd: 'bower_components/', src: ['foundation/**/foundation.{topbar,offcanvas}.js'], dest: 'deploy/js/'},
          {expand: true, cwd: 'scrollorama/js', src: ['jquery.scrollorama.js'], dest: 'deploy/js/'},
        ]
      }
    },

    watch: {
      grunt: { files: ['Gruntfile.js'] },

      sass: {
        files: 'scss/**/*.scss',
        tasks: ['sass']
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('build', ['sass','clean','copy']);
  grunt.registerTask('default', ['build','watch']);
}
