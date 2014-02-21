module.exports = {
  dist: {
    options: {
      baseUrl: 'scripts',
      out: 'dist/all.js',
      mainConfigFile: 'scripts/init.js',
      almond: true,
      paths: {
        'templates': '../../.tmp/scripts/templates'
      },
      preserveLicenseComments: false,
      useStrict: true,
      wrap: true,
      pragmasOnSave: {
        //it to `false` if you need to parse template strings even after build
        excludeHbsParser: true,
        // kills the entire plugin set once it's built.
        excludeHbs: true,
        // removes i18n precompiler, handlebars and json2
        excludeAfterBuild: true
      }
    }
  }
};
