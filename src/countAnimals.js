const data = require('../data/zoo_data');

const { species } = require('../data/zoo_data');

function countAnimals(animal) {
  // seu código aqui
  if (animal === undefined) {
    const allAnimals = {};
    species.forEach((specie) => {
      allAnimals[specie.name] = specie.residents.length;
    });
    return allAnimals;
  }
  if (Object.keys(animal).length === 1) {
    return species.find((specie) => specie.name === animal.specie).residents.length;
  }

  const animalAndSex = species.find((specie) => specie.name === animal.specie);

  return animalAndSex.residents.filter((resident) => resident.sex === animal.sex).length;
}

module.exports = countAnimals;
