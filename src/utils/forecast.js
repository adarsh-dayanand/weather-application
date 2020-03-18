const request = require('request')
const os = require('os')

const forecast = (latitude, longitude, callback) => {
    //const url = 'https://api.darksky.net/forecast/9d1465c6f3bb7a6c71944bdd8548d026/' + latitude + ',' + longitude
    const url = "https://api.darksky.net/forecast/7b3e984ecf005ebf25e202b3dde750d9/"+encodeURIComponent(latitude)+","+encodeURIComponent(longitude)+"?units=si";

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            var data = body.daily.data[0].summary +' It is currently ' + body.currently.temperature + ' degress out.\n The maximum temperature today is ' + body.daily.data[0].temperatureMax +' and minimum temperature is ' + body.daily.data[0].temperatureMin + '. \tThere is a ' + body.currently.precipProbability + '% chance of rain.'
            callback(undefined, data)
        }
    })
}

module.exports = forecast