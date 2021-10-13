const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  const children = entrants.filter((person) => person.age < 18);
  const adults = entrants.filter((person) => person.age >= 18 && person.age < 50);
  const senior = entrants.filter((person) => person.age >= 50);

  return {
    child: children.length,
    adult: adults.length,
    senior: senior.length,
  };
}

function calculateEntry(entrants) {
  // seu código aqui
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const { prices } = data;
  const entrantsCount = countEntrants(entrants);

  return (prices.child * entrantsCount.child)
  + (prices.adult * entrantsCount.adult)
  + (prices.senior * entrantsCount.senior);
}

module.exports = { calculateEntry, countEntrants };
