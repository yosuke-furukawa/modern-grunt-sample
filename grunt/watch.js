var networkConf = require("../conf/network_settings.json");
module.exports = {
  livereload: {
    files: [
      'Gruntfile.js',
      '.jshintrc',
      'grunt/**/*.js',
      'conf/{,**/}*.js',
      'scripts/{,**/}*.js',
      'templates/{,**/}*.hbs',
      'test/spec/{,**/}*.js',
      'mocks/**'
    ],
    tasks: ['jsbeautifier', 'jshint', 'exec'],
    options: {
      livereload: networkConf.livereload.port
    }
  }
}
