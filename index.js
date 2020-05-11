// 爬取指定站点的图片
const request = require('request')
const path = require('path')
const fs = require('fs')
const config = require('./config')
const analyze = require('./analyze')

function start() {
    request(config.url, (err, res, body) => {
        if (!err && res) {
            console.log('开始爬取')
            analyze.findImg(body, download)
        }
    })
}

function download(imgUrl, index) {
    let ext = imgUrl.split('.').pop()
    let imgFilePath = path.join(config.imgDir, `${index}.${ext}`)
    request(imgUrl).pipe(fs.createWriteStream(imgFilePath, { 'encoding': 'utf8' }))
    console.log(`正在下载第${index}张`)
}

start()
