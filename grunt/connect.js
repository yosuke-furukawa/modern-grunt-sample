var networkConf = require("../conf/network_settings.json");
module.exports = {

  options: {
    hostname: "*",
    port: networkConf.server.port,
    base: '.',
    middleware: function(connect) {
      var lrSnippet = require('connect-livereload')({
        port: networkConf.livereload.port
      });
      var proxySnippet = require("grunt-connect-proxy/lib/utils").proxyRequest;
      return [
        lrSnippet,
        connect.static(require('path').resolve(".")),
        connect.static(require('path').resolve("./quiz")),
        connect.static(require('path').resolve("./quiz/assets")),
        proxySnippet,
      ];
    },
  },
  proxies: [{
    context: "/sample",
    host: "localhost",
    port: networkConf.proxy.port,
  }, {
    context: "/quiz",
    host: "localhost",
    port: networkConf.proxy.port,
  }, ],
  test: {
    options: {
      port: 8012,
    },
  }
}
