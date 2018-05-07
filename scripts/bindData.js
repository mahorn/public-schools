// create a constant variable for our dependencies
const fs = require('fs'),
    chalk = require('chalk'),
    mapshaper = require('mapshaper');
// process for binding our austin files together
function processBindFiles() {
    // read in our districts json file
    fs.readFile(__dirname + "/../data/school-districts-filtered.json", 'utf8', (err, geojson) => {
        // throw error if occurs
        if (err) throw err;
        // create transformation variable for mapshaper with simplification factor of 15%
        const commands = '-filter-fields DISTRICT -simplify dp 15% -o precision=.0001 format=geojson';
        // use mapshaper to simplify our district shapes
        mapshaper.applyCommands(commands, geojson, (err, data) => {

            if (err) throw err;
            // create a geojson object for our traffic signal json
            const geojson = JSON.parse(data);
            // read in the traffic signal data
            fs.readFile(__dirname + "/../data/schools-filtered.json", "utf8", (err, geojson2) => {

                if (err) throw err;
                // create output variable post parse for our initial CSV object to districts with function 'bindData'
                const outGeoJSON = bindData(geojson, geojson2);
                // write our outGeoJSON to a new district counts json file
                fs.writeFile(__dirname + '/../data/school-districts-counts.json', JSON.stringify(outGeoJSON), 'utf8', function(err) {

                    if (err) throw err;

                    console.log(chalk.green('school-districts-counts.json written'));
                });
            });
        });
    });
}
// function to bind traffic signals and district information
function bindData(geojson, geojson2) {
    // for loop for iteration through features in our district data
    geojson.features.forEach(function(feature) {
        // start interation count as 0
        let count = 0;
        // for each row in our CSV select find matching ids in district data
        geojson2.features.forEach(function(feature) {
            if (feature.properties.DISTRICT === feature.properties.DISTRICT) {
                count++ // increase count with number of time id was found
            }
        });
        // add counts to district data set
        feature.properties.COUNT = count;

    });

    return geojson;

}

processBindFiles();
