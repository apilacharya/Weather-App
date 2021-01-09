const request = require('request');

const forecast =  (add, long, lat, callback) => {
  const address = add.toUpperCase()
  const url = `http://api.weatherstack.com/current?access_key=3bea08f40734c6c448bbdbf0c33dadb8&query=${lat},${long}&units=f`;

  request({ url, json: true }, (error, {body}) => {
    if (error) {
      callback('Unable to connect to weather service', undefined);
    } else if (body.error) {
      callback('Unable to find location', undefined);
    } else {
      callback( 
        undefined ,
        `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degrees out and feels like a ${body.current.feelslike} degrees in ${address}.`
      );
    }
  });
};

module.exports = forecast;
