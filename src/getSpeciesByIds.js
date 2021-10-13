const data = require('../data/zoo_data');

const { species } = data;

const getSpeciesByIds = ((...ids) =>
  // seu código aqui
  species.filter((idObject) => ids.includes(idObject.id))
);

module.exports = getSpeciesByIds;
