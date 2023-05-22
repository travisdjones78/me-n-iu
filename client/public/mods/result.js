const cheerio = require("cheerio");

function getMovieInfo(data) {
    const $ = cheerio.load(data);  // cheerio loads the HTML body
    let array = [];
    const $title = $('div.fbQftq h1').text()
    const title = ($title === '')
    const $year = $('li.ipc-inline-list__item a.WIUyh').text().replace(/\D/g, '').slice(0, 4)
    const $plot = $('span.sc-16ede01-2.gXUyNh').text()
    const $img = $('div.ipc-media img.ipc-image').attr('src')
console.log('p',$plot)
    $("div.sc-bfec09a1-5").each(function (index) {
        const movie = {
            actor: $(this).find(" a.sc-bfec09a1-1").text(),
            character: $(this).find("span.sc-bfec09a1-4").text(),
            img: $(this).find("img.ipc-image").attr('src')
        };
        array.push(movie);
    });

    return {
        title: $title,
        year: $year,
        img: $img,
        stars: array,
        plot: $plot
    }
}

module.exports = getMovieInfo