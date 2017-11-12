const { NODE_ENV } = require('./common');

const MONITOR = {
  development: {
    URL: 'tcp://0.0.0.0:10090',
    MAX_QUEUE_SIZE: 10 * 1000,
    HEARTBEAT_INTERVAL: 60 * 1000,
  },
  test: {
    URL: 'tcp://0.0.0.0:10090',
    MAX_QUEUE_SIZE: 10 * 1000,
    HEARTBEAT_INTERVAL: 60 * 1000,
  },
  preproduction: {
    URL: 'tcp://192.168.0.104:10090',
    MAX_QUEUE_SIZE: 10 * 1000,
    HEARTBEAT_INTERVAL: 60 * 1000,
  },
  production: {
    URL: 'tcp://10.26.200.127:10090',
    MAX_QUEUE_SIZE: 10 * 1000,
    HEARTBEAT_INTERVAL: 60 * 1000,
  },
};

module.exports = Object.freeze({ MONITOR: MONITOR[NODE_ENV] });
