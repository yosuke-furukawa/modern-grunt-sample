var networkConf = require("../conf/network_settings.json");
module.exports = {
  stubsServer: {
    options: {
      stubs: networkConf.proxy.port,
    },
    files: [{
      src: ['mocks/stubby/**/*.yaml']
    }],
  }
};
