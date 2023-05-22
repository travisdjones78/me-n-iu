const cheerio = require("cheerio");

// const url = "https://www.imdb.com/find?q=tron&ref_=nv_sr_sm";

function searchMovies(body) {
  // console.log(body)
  const $ = cheerio.load(body);  // cheerio loads the HTML body
  let array = [], 
  listItems =[]
  $("ul.ipc-metadata-list > li.find-title-result").each(function (index) {
    const movie = {
      name: $(this).find("div a.ipc-metadata-list-summary-item__t").text(), // the name of the movie
      imdbId: $(this).find("div a.ipc-metadata-list-summary-item__t").prop('href').match(/title\/(.*)\//)[1], // the id of the movie
      year: $(this).find("ul.ipc-inline-list label.ipc-metadata-list-summary-item__li").text().trim(), // the year of the movie
      catagory: $(this).find("ul.ipc-inline-list label.ipc-metadata-list-summary-item__li").text().split(' ')
    };
    array.push(movie);
  });
  // console.log('aa',array)
  return array
}

module.exports = searchMovies







