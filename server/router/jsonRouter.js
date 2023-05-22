// const dogJSON = require('./dogList.json')

// const fs = require('fs')
// fs.readFile('./dogList.json', 'utf8', (err, jsonString) => {
//     console.log(jsonString)
// //     if (err) {
// //         console.log("Error reading file from disk:", err)
// //         return
// //     }
// //     try {
// //         const customer = JSON.parse(jsonString)
// //         console.log("Customer address is:", customer.address) // => "Customer address is: Infinity Loop Drive"
// // } catch(err) {
// //         console.log('Error parsing JSON string:', err)
// //     }
// })


var json = '{"hola":"ciao"}';

//Parse the JSON: convert it into an object
var parsedJson =JSON.parse(json);

//add whatever you want
parsedJson.hi = 'bye'; 
json=parsedJson
console.log(json)