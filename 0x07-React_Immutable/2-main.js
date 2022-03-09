const accessImmutableObject = require('./2-nested');

const result = accessImmutableObject(
  {
    name: {
      first: 'Guillaume',
      last: 'Salva',
    },
  },
  ['name', 'first'],
);

console.log(result);
