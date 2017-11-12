const { NODE_ENV, ENV_MEMCACHE } = require('./common');

/**
 * @namespace MEMCACHE
 * @property {String} URL
 * @property {Number} SESSION_EXPIRE_TIME
 * @property {Object} CONFIG
 * @property {Boolean} LIST_CACHE
 */
const MEMCACHE = {
  development: {
    URL: '192.168.0.100:12000',
    SESSION_EXPIRE_TIME: 0,
    CONFIG: {
      poolSize: 30,
      debug: true,
    },
    POOLSIZE: 30,
    DEBUG: true,
    LIST_CACHE: false,
  },
  test: {
    URL: '192.168.0.100:12000',
    SESSION_EXPIRE_TIME: 0,
    CONFIG: {
      poolSize: 30,
      debug: true,
    },
    LIST_CACHE: false,
  },
  preproduction: {
    URL: '192.168.0.110:12000',
    SESSION_EXPIRE_TIME: 6 * 60 * 60,
    CONFIG: {
      poolSize: 30,
      timeout: 3 * 1000,
      idle: 20 * 1000,
      debug: true,
    },
    LIST_CACHE: false,
  },
  production: {
    URL: 'bab0f71a6d7e4f68.m.cnhzaliqshpub001.ocs.aliyuncs.com:11211',
    SESSION_EXPIRE_TIME: 3 * 60 * 60,
    CONFIG: {
      poolSize: 30,
      timeout: 3 * 1000,
      idle: 20 * 1000,
      debug: false,
    },
    LIST_CACHE: true,
  },
};

module.exports = Object.freeze({ MEMCACHE: MEMCACHE[ENV_MEMCACHE || NODE_ENV] });
