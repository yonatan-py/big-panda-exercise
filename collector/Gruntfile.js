module.exports = function(grunt) {


  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')
  });

  grunt.registerTask('test', function() {
     var done = this.async();
     var mocha = require('child_process').spawn('./node_modules/mocha/bin/mocha', ['--recursive', './tests'], {stdio: 'inherit'});
     mocha.on('close', function (code) {
      done(code === 0);
    });
  });
}
