const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const URL = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedName;
  if (error) {
    callback(error, null);
  } else if (body) {
    const data = JSON.parse(body);

    if (data.length === 0) {
      callback(error, null);
    } else {
      let description = data[0].description;
      callback(null, description);
    } 
  }

};

module.exports = {
fetchBreedDescription
};
