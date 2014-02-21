module.exports = {
  compile: {
    options: {
      namespace: 'JST',
      amd: true
    },
    files: {
      '.tmp/scripts/templates.js': ['templates/**/*.hbs']
    }
  }
};
