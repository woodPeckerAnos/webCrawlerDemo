const path = require('path')

const url = 'https://cn.bing.com/' // target Website Url

const imgDir = path.join(__dirname, 'results', 'images')

module.exports.url = url
module.exports.imgDir = imgDir
