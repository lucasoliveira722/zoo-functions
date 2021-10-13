const data = require('../data/zoo_data');

const { species } = data;

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const arrayFiltered = species.find((animalObj) => animalObj.name === animal).residents
    .every((filteredAnimals) => filteredAnimals.age >= age);
  return arrayFiltered;
}

module.exports = getAnimalsOlderThan;
