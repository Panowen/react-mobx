const { ENV_QINIU, NODE_ENV } = require('./common');

/**
 * @namespace QINIU
 * @property {Object} URL
 * @property {String} URL.image
 * @property {String} URL.html
 * @property {String} ACCESS_KEY
 * @property {String} SECRET_KEY
 * @property {Object} BUCKET
 * @property {String} BUCKET.image
 * @property {String} BUCKET.html
 */

const QINIU = {
  development: {
    URL: {
      image: 'http://img.test.weidiango.com',
      html: 'http://img.test.weidiango.com',
    },
    ACCESS_KEY: '9UQMVnR0WgcBEVRG0dWIr33EDDlTO-zGpkUueMBd',
    SECRET_KEY: 'TnQ9-miCk54eLf1ZxlNyNLLx3aDkl6F7Lp5fWW81',
    BUCKET: {
      image: 'test',
      html: 'test',
    },
  },
  test: {
    URL: {
      image: 'http://oan8zbttd.bkt.clouddn.com',
      html: 'http://oan8zbttd.bkt.clouddn.com',
    },
    ACCESS_KEY: '9UQMVnR0WgcBEVRG0dWIr33EDDlTO-zGpkUueMBd',
    SECRET_KEY: 'TnQ9-miCk54eLf1ZxlNyNLLx3aDkl6F7Lp5fWW81',
    BUCKET: {
      image: 'test',
      html: 'test',
    },
  },
  preproduction: {
    URL: {
      image: 'http://img.test.weidiango.com',
      html: 'http://html.test.weidiango.com',
    },
    ACCESS_KEY: '9UQMVnR0WgcBEVRG0dWIr33EDDlTO-zGpkUueMBd',
    SECRET_KEY: 'TnQ9-miCk54eLf1ZxlNyNLLx3aDkl6F7Lp5fWW81',
    BUCKET: {
      image: 'image-preproduction',
      html: 'html-preproduction',
    },
  },
  production: {
    URL: {
      image: 'https://img.weidiango.com',
      html: 'https://html.weidiango.com',
    },
    ACCESS_KEY: '9UQMVnR0WgcBEVRG0dWIr33EDDlTO-zGpkUueMBd',
    SECRET_KEY: 'TnQ9-miCk54eLf1ZxlNyNLLx3aDkl6F7Lp5fWW81',
    BUCKET: {
      image: 'image-production',
      html: 'html-production',
    },
  },
};

module.exports = Object.freeze({ QINIU: QINIU[ENV_QINIU || NODE_ENV] });
