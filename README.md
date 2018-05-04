# Wake County Public Schools

# Summary
A map of school locations and school districts within Wake County, North Carolina, USA.

# Data

School Board Districts
* Obtained from [Raleigh Open Data](https://data-ral.opendata.arcgis.com/datasets/Wake::school-board-districts)
* Contains Wake County school districts.

Wake County Public Schools
* Obtained from [Raleigh Open Data](https://data-ral.opendata.arcgis.com/datasets/Wake::wake-county-public-schools?selectedAttribute=STATUS)
* Unnecessary attributes were removed. Data was bind with School Board Districts.
* Contains locations of public schools in Wake County.

United States Counties
* Obtained from [US Census Cartographic Boundery Files](https://www.census.gov/geo/maps-data/data/cbf/cbf_ua.html)
* Shapefile data converted into WGS84, simplyfied and encoded within a GeoJSON file using Mapshaper.

# Data Process

* Cartocolors.json file read and upload using require().
* Cartocolors.json file read and write using fs.readFile to extract "Geyser palette".
* ogr2ogr used to convert public schools shapefile to GeoJSON and features extracted using mapshaper -filter-fields.
* ogr2ogr used to convert school disctrics shapefile to GeoJSON and features extracted using mapshaper -filter-fields.

# Project npm Packages
* chalk
* less

# Mock up

![Map of public schools in Wake County, North Carolina](/RoughDraft-ArcPro.PNG "Mock up")




