const data = require('../data/zoo_data');

const { species, employees } = data;

const getEmployee = ((id) => employees.find((employee) => employee.id === id));

const getAnimal = ((id) => species.find((animal) => animal.id === id));

const getOldestAnimal = ((animal) => animal.reduce((oldestAnimal, currentAnimal) => {
  if (currentAnimal.age > oldestAnimal.age) {
    return currentAnimal;
  }
  return oldestAnimal;
}));

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const { responsibleFor } = getEmployee(id);

  const { residents } = getAnimal(responsibleFor[0]);

  const oldestResident = getOldestAnimal(residents);

  return Object.values(oldestResident);
}

console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

module.exports = getOldestFromFirstSpecies;
