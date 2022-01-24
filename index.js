const {fetchBreedDescripiton} = require('.');
const args = process.argv.slice(2);
const breedName = args[0];

fetchBreedDescripiton(BreedName, (error, description) => {
	if (error) {
		console.log('Error fetch details:', error);
	} else {
		console.log(description);
	}
});
