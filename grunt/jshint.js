module.exports = {
  options: {
    jshintrc: '.jshintrc',
    reporter: require('jshint-stylish'),
    force: true
  },
  all: [
    'Gruntfile.js',
    'scripts/{,*/}*.js',
    '!scripts/vendor/*',
    'test/spec/{,*/}*.js'
  ]
};
