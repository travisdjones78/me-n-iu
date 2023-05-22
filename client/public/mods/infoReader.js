const path = require('path');
const fs = require('fs');
let directoryPath = path.join(__dirname, '../../../Google Drive/My Drive/Video/Movies');

const reader = () => {
    let newFile = []
    let newPath = []
    let upload = []
    let shortList = []
    let longList = []
    let finalLabel = []
    let more = ''
    let splitLabel = ''
    let strCnt = 0

    try {
        newPath = fs.readdirSync(`${directoryPath}`)
    } catch (e) {
    }
    newPath = newPath.slice(1)
    newFile = firstTransfer(newPath)
    labelRewriter(newFile)
    function firstTransfer(info) {
        for (let i = 0; i < info.length; i++) {
            upload.push(firstReload(info[i]))
        }

        const newUpload = upload.reduce((prev, curr, x) => {
            return [...prev, {
                'Dir': info[x],
                'Movies': curr
            }]
        })

        for (let i = 0; i < newUpload.length; i++) {
            if (typeof newUpload[i] === 'string') {
                shortList.push(newUpload[i])
                strCnt++
            } else {
                longList.push(newUpload[i])
            }
        }
        more = {
            'Dir': 'Number',
            'Movies': [...shortList]
        }
        return [more, ...longList]
    }

    function firstReload(id) {
        let reload = []
        const upgrade = fs.readdirSync(`${directoryPath}/${id}`, (err, movies) => {
            reload.push(movies)
            return
        })
        reload = upgrade
        return reload
    }

    function labelRewriter(movie) {
        let newMovies = []
        let wordCnt = 0
        let movieObj = {}
        let title = ''
        let words = ''

        for (let i = 0; i < movie.length; i++) {
            const movieDir = movie[i].Dir
            const movieArr = movie[i].Movies

            for (let j = 0; j < movieArr.length; j++) {
                const newLabel = movieArr[j].split('.')
                const newObj = {
                    movie: newLabel,
                    dir: movieDir
                }
                newMovies.push(newObj)
            }

            for (let k = 0; k < newMovies.length; k++) {
                words = newMovies[k].movie

                for (let l = 0; l < newMovies[k].movie.length; l++) {
                    if (newMovies[k].movie[l] >= 1939 && newMovies[k].movie[l] <= 2023) {
                        item = newMovies[k].movie[l]
                        wordCnt = [l]
                        words.splice(wordCnt)
                        title = words.join(' ')
                        movieObj = {
                            title,
                            year: item,
                            movieDir
                        }
                        finalLabel.push(movieObj)
                    }
                }
            }
        }
    }
    return finalLabel
}

module.exports = reader()



