"use strict"

var fs = require('fs');
var chalk = require('chalk');

fs.readFile(__dirname + '/../project-files/cartocolors.json', function (err, data){

    if (err) throw error;

    console.log(chalk.blue("data"));

    extractScheme(JSON.parse(data));

})

function extractScheme(data) {
    
    var outputData = {
        'DarkMint': data['DarkMint']
    };

    console.log(chalk.green('object extracted: '), outputData);

    writeOutputFile(outputData)

}

function writeOutputFile(outputData) {

    fs.writeFile(__dirname + '/../data/darkmintcolors.json', JSON.stringify(outputData), 'utf-8', function (err) {

        if (err) throw err;

        console.log(chalk.blue('what happen?'));
    });
}