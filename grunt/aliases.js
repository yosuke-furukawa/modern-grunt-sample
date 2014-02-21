var grunt = require('grunt');

module.exports = {
  default: function(target) {

    if (target === 'dist') {
      return grunt.task.run(['build', 'open', 'connect:dist:keepalive']);
    }

    grunt.option('force', true);

    grunt.task.run([
      'clean:server',
      'configureProxies',
      'stubby',
      'connect',
      'watch'
    ]);
  },

  createDefaultTemplate: function() {
    grunt.file.write('.tmp/scripts/templates.js', 'this.JST = this.JST || {};');
  },

  test: [
    'clean:server',
    'configureProxies',
    'createDefaultTemplate',
    'handlebars',
    'connect:test',
    'jshint',
    'exec:mocha'
  ],

  build: [
    'createDefaultTemplate',
    'useminPrepare',
    'concurrent:build'
  ]
}
