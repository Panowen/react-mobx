const { NODE_ENV, ENV_DUBBO, APP_NAME, APP_VERSION } = require('./common');

const dubboConfig = {
  development: {
    registry: {
      url: '192.168.0.110:2181',
    },
    debug: true,
  },
  test: {
    registry: {
      url: '192.168.0.110:2181',
    },
    debug: true,
  },
  preproduction: {
    registry: {
      url: '192.168.0.110:2181',
    },
    debug: true,
  },
  production: {
    registry: {
      url: '10.26.250.90:2181',
    },
    debug: true,
  },
};
const DUBBO = Object.assign({
  description: {
    application: APP_NAME,
    'application.version': APP_VERSION,
    dubbo: 'dubbo_node_client_1.0',
    pid: process.pid,
    version: '1.0.0',
  },
  loadbalance: 'random',
}, dubboConfig[ENV_DUBBO || NODE_ENV]);

module.exports = Object.freeze({ DUBBO });
