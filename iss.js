const request = require('request');

const nextISSTimesForMyLocation = function(callback) {
  fetchMyIP((error, ip) => {
    if (error) {
      return callback(error,null);
    }
  fetchCoordsByIP(ip, (error, data) => {
    if (error) {
      return callback(error, null);
    }
    fetchISSFlyOverTimes(data, (error, resp) => {
      if (error) {
        return callback(error, null)
      }
      callback(null, resp)
    })
  })
  })
};

