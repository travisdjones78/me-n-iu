const path = require('path');
const fs = require('fs');
let directoryPath = path.join(__dirname, '../client/public/breedPics/');
let newPath = ''
try {
    newPath = fs.readdirSync(`${directoryPath}`)
} catch (e) {
}
newPath.shift()
// console.log('n',newPath)

let reload = []
const upgrade = fs.readdirSync('../client/public/breedPics/', (err, data) => {
    reload.push(...data)
    return reload
})
// console.log(data)
// upgrade
const list = []
const list2 = []
upgrade.shift()

fs.readdirSync(`../client/public/breedPics/${upgrade[1]}`, (err, data) => {
    //    return list2.push(data)
    console.log(data)
})

// const list2 = list.shift()
console.log('l', list2)
// let reload2 =[]


console.log('l', list)

const dogPics = [
    { name: 'americanBully', pics: ['download-1.jpg', 'download.jpg', 'images-1.jpg', 'images-2.jpg', 'images.jpg'] },
    { name: 'french', pics: ['download-1.jpg', 'download-2.jpg', 'download.jpg', 'images.jpg'] },
    { name: 'microExotic', pics: ['1_csjGN9wSothy0L65GJlSvQ.jpg', 'download.jpg', 'images-1.jpg', 'images-2.jpg', 'images.jpg'] },
    { name: 'nanoBully', pics: ['bro.jpg', 'download.jpg', 'images.jpg', 'pa.jpg'] },
    { name: 'tigerstriped', pics: ['download-2.jpg', 'download-3.jpg', 'download.jpg', 'images.jpg'] }
]
const listing = JSON.stringify(dogPics)
console.log(listing)