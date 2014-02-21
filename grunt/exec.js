var networkConf = require("../conf/network_settings.json");
module.exports = {
  mocha: {
    command: 'mocha-phantomjs http://localhost:<%= connect.test.options.port %>/test',
    stdout: true
  }
};
