const mapboxgl = require('mapbox-gl')
const anObject = require('./marker')

mapboxgl.accessToken = 'pk.eyJ1IjoibG1hcmlxdWl0IiwiYSI6ImNqbWk2d2FrczAxM3Yzd3FwbjZ2ejYwMDcifQ.aendbjJFlajiEGjjkidVww'

//the entire MAP
const map = new mapboxgl.Map({
    container: "map",
    center: [-74.009, 40.705],
    zoom: 12,
    style: "mapbox://styles/mapbox/streets-v10"
})

anObject.buildMarkerFunction([-74.009, 40.705], 'activity').addTo(map);
anObject.buildMarkerFunction([-74.05, 40.705], 'hotel').addTo(map);
anObject.buildMarkerFunction([-74.05, 40.742], 'restaurant').addTo(map);
