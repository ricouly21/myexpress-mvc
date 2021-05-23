var pets = exports.pets = [];

pets.push({ name: 'Tobi', id: 0 });
pets.push({ name: 'Loki', id: 1 });
pets.push({ name: 'Jane', id: 2 });
pets.push({ name: 'Raul', id: 3 });

var users = exports.users = [];

users.push({
  id: 0,
  name: 'TJ',
  pets: [
    pets[0],
    pets[1],
    pets[2]
  ],
});
users.push({
  id: 1,
  name: 'Guillermo',
  pets: [
    pets[3],
  ],
});
users.push({
  id: 2,
  name: 'Nathan',
  pets: [],
});
