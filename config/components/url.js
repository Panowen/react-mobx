const { NODE_ENV } = require('./common');

/**
 * @namespace URL
 * @property {String} EXCELUPLOAD
 * @property {String} EXCELDOWNLOAD
 * @property {String} WECHAT_KEY_UPLOAD
 * @property {String} PRODUCT_PREVIEW
 * @property {String} DEFAULTWEBAPPDOMAIN
 * @property {Function} ORDER_EXPORT_DOWNLOAD_URL
 * @property {Function} ORDER_IMPORT_DOWNLOAD_URL
 */

const URL = {
  development: {
    EXCELUPLOAD: 'http://192.168.0.50:8080/weidian_shop/order/import', // 订单导入上传地址
    EXCELDOWNLOAD: 'http://file.test.weidiango.com', // 订单导入导出下载地址
    WECHAT_KEY_UPLOAD: 'http://192.168.0.80/weidian_wechat/file/importmpmch', // 微信支付秘钥上传地址
    PRODUCT_PREVIEW: 'http://wx.test.weidiango.com/product/m', // 产品预览地址
    DEFAULTWEBAPPDOMAIN: 'http://wx.test.weidiango.com', // webapp域名
  },
  test: {
    EXCELUPLOAD: 'http://file.test.weidiango.com/shop/order/import',
    EXCELDOWNLOAD: 'http://file.test.weidiango.com',
    WECHAT_KEY_UPLOAD: 'http://192.168.0.80/weidian_wechat/file/importmpmch',
    PRODUCT_PREVIEW: 'http://wx.test.weidiango.com/product/m',
    DEFAULTWEBAPPDOMAIN: 'http://wx.test.weidiango.com',
  },
  preproduction: {
    EXCELUPLOAD: 'http://file.test.weidiango.com/shop/order/import',
    EXCELDOWNLOAD: 'http://file.test.weidiango.com',
    WECHAT_KEY_UPLOAD: 'http://file.test.weidiango.com/wx/file/importmpmch',
    PRODUCT_PREVIEW: 'http://wx.test.weidiango.com/product/m',
    DEFAULTWEBAPPDOMAIN: 'http://wx.test.weidiango.com',
  },
  production: {
    EXCELUPLOAD: 'http://orderfile.weidiango.com/order/import',
    EXCELDOWNLOAD: 'http://file.weidiango.com',
    WECHAT_KEY_UPLOAD: 'https://wxfile.weidiango.com/file/importmpmch',
    PRODUCT_PREVIEW: 'https://wx.weidiango.com/product/m',
    DEFAULTWEBAPPDOMAIN: 'https://wx.weidiango.com',
  },
};

module.exports = Object.freeze({
  URL: Object.assign({
    ORDER_EXPORT_DOWNLOAD_URL: (url) => `/order/file/export${url.replace(/^(http:|https:)\/\/(\w|\.)+\/(orderimport|orderexport)/, '')}`,
    ORDER_IMPORT_DOWNLOAD_URL: (url) => `/order/file/import${url.replace(/^(http:|https:)\/\/(\w|\.)+\/(orderimport|orderexport)/, '')}`,
  }, URL[NODE_ENV]),
});
