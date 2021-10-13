const data = require('../data/zoo_data');

const { species } = data;

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const arrayFiltered = species.find((animalObj) => animalObj.name === animal).residents
    .every((filteredAnimals) => filteredAnimals.age >= age);
  return arrayFiltered;
}

console.log(getAnimalsOlderThan('lions', 3));

module.exports = getAnimalsOlderThan;
