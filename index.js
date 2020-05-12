// 爬取指定站点的图片
const request = require('request')
const path = require('path')
const fs = require('fs')
const config = require('./config')
const analyze = require('./analyze')

const imgArr = [
    'https://cn.bing.com/th?id=OHR.SeagullsChat_ZH-CN8973709588_UHD.jpg&pid=hp&w=3840&h=2160&rs=1&c=4&r=0',
    'https://cn.bing.com/sa/simg/hpc27_2x.png',
    'https://cn.bing.com/th?id=OHR.OldPatriarchTree_ZH-CN8818146190_UHD.jpg&rf=LaDigue_UHD.jpg&pid=hp&w=3840&h=2160&rs=1&c=4',
    'https://cn.bing.com/th?id=OHR.BarnOwlMigration_ZH-CN8579914070_UHD.jpg&rf=LaDigue_UHD.jpg&pid=hp&w=3840&h=2160&rs=1&c=4',
]

function start() {
    request(config.url, (err, res, body) => {
        if (!err && res) {
            console.log('开始爬取')
            analyze.findImg(body, download)
        }
    })
}

function download(imgUrl, index) {
    imgUrl=imgArr[index]
    if (!imgUrl) return
    let ext = imgUrl.split('.').pop()
    let imgFilePath = path.join(config.imgDir, `${index}.${ext}`)
    request(imgUrl).pipe(fs.createWriteStream(imgFilePath, { 'encoding': 'utf8' }))
    console.log(`正在下载第${index}张`)
}

start()
