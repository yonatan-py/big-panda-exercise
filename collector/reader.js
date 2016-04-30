var exec = require('child_process').exec;

var generator;
module.exports = {
  init: function () {
    generator = exec('./generator-linux-amd64');
    generator.stderr.on('data', function (data) {
      console.error('stderr: ' + data);
    });

    generator.on('exit', function (code) {
      console.log('child process exited with code ' + code);
    });
  },
  onLine: function (handler) {
    generator.stdout.on('data', function (data) {
        handler(data);
    });
  }
};
