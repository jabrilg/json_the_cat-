const request = require('request-promise-native');

const fetchMyIP = function() {
  return request('http://api.ipify.org?format=json')
};
const fetchCoordsByIP = function(body) {
  const ip = JSON.parse(body).ip
  return request(`http://freefeoip.ap/json/${ip}`)
}
const fetchISSFlyOverTimes = function (body) {
  const { latitude, longtude } = JSON.parse(body);
  const url = `http://iss-pass.herokuapp.com/json/?lat=${latitude}&lon=${longitude}`
  return request(url)
}

const nextISSTimesForMyLocation = function() {
  return fetchMyIP()
  .then(fetchCoordsByIP)
  .then(fetchISSFlyOverTimes)
  .then((data) => {
    const { response } = JSON.parse(data);
    return response
  })
}

module.exports ={
  nextISSTimesForMyLocation
}