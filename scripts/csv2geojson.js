"use strict"

var fs = require ('fs');
var csv2geojson = require ('csv2geojson')

fs.readFile(__dirname + '/../data/schools-filtered.csv', 'utf-8', (err, csvString) => {
    if (err) throw err;

    csv2geojson.csv2geojson(csvString, {
        latfield: 'LATITUDE',
        longfield: 'LONGITUDE',
        delimeter: ','

    }, (err, geojson) => {
        if(err) throw err;

        console.log(geojson);

        fs.writeFile(__dirname + '/../data/schools-filtered1.json', JSON.stringify(geojson), 'utf-8', (err) => {
    
    if(err) throw err;

console.log('done');
});
    })
});