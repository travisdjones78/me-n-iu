function compareTitle(data) {
    const inputTitle = data[0].title.split(' ')
    const inputYear = data[0].year.toString()
    const list = data.slice(1)
    let newList = []
    let newMatch = ''

    list.forEach((element, idx) => {
        const newName = element.name
            .toString()
            .replace(/[é]/g, "e")
            .replace(/[^a-zA-Z 0-9]/g, "")
            .split(' ')
        const catagoryList = element.catagory
        const catagoryYear = element.catagory[0].slice(0, 4)
        const isATVShow = catagoryList.includes('TV') || catagoryList.includes('EpisodeTV')
        if (!isATVShow) {
            const newElement = {
                title: newName,
                year: catagoryYear
            }
            newList.push(newElement)
        }
    });
    console.log('ch', newList)
    console.log('ch2', inputTitle, inputYear)
    for (let i = 0; i < newList.length; i++) {
        if (inputTitle.join(' ') === newList[i].title.join(' ') &&
            inputYear === newList[i].year) {
            newMatch = list[i].imdbId
        }
    }
    // console.log('n',newMatch)
    const movieId = newMatch
    const movieUrl = `https://www.imdb.com/title/${movieId}/`
    return movieUrl


}

module.exports = compareTitle
