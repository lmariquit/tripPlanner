const mapboxgl = require('mapbox-gl')

//Placing Icons on Map
function buildMarkerFunction (coordinates, icon) {
    const iconObj = {
        activity: 'http://i.imgur.com/WbMOfMl.png',
        hotel: 'http://i.imgur.com/D9574Cu.png',
        restaurant: 'http://i.imgur.com/cqR6pUI.png'
    }

    const markerDomEl = document.createElement("div"); // Create a new, detached DIV
    markerDomEl.style.width = "32px";
    markerDomEl.style.height = "39px";
    markerDomEl.style.backgroundImage = `url(${iconObj[icon]})`;
    console.log(iconObj[icon])

    return new mapboxgl.Marker(markerDomEl).setLngLat(coordinates)
}

module.exports = {
    buildMarkerFunction
}