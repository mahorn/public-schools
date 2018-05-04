"use strict"

var fs = require ('fs');
var csv2geojson = require ('csv2geojson');

fs.readFile(__dirname + '/../data/schools-filtered.csv', 'utf-8', (err, csvString) => {
    if (err) throw err

    console.log(csvString)

});