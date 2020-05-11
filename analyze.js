// 分析页面结构
const cheerio = require('cheerio')

function findImg(dom, callback) {
    let $ = cheerio.load(dom)
    $('img').each(function(index, element) {
        let imgSrc = $(this).attr('src')
        callback(imgSrc, index)
    })
}

module.exports.findImg = findImg
