# Wake County Public Schools

# Summary
A map of school locations and school districts within Wake County, North Carolina, USA.

# Data

School Board Districts
* Obtained from [Raleigh Open Data](https://data-ral.opendata.arcgis.com/datasets/Wake::school-board-districts)
* Contains Wake County school districts.

Wake County Public Schools
* Obtained from [Raleigh Open Data](https://data-ral.opendata.arcgis.com/datasets/Wake::wake-county-public-schools?selectedAttribute=STATUS)
* Unnecessary attributes were removed. Data was bind with School Board Districts using nmp mapshaper.
* Contains locations of public schools in Wake County, North Carolina.

# Data Process/Scripts
* ogr2ogr used to convert public schools shapefile to GeoJSON and features extracted using mapshaper -filter-fields.
* ogr2ogr used to convert school disctrics shapefile to GeoJSON and features extracted using mapshaper -filter-fields.
* fs.readFile used to extract "Antique palette" from Cartocolors.json file.
* mapshaper used to bindData from both GeoJson files.

# Project npm Packages
* "chalk": "^2.4.1"
* "mapshaper": "^0.4.70"





