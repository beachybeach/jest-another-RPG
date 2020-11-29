const { TestScheduler } = require('jest');
const Potion = require('../lib/Potion.js');

//'new' is to create new potion objects. expect.any() method takes constructor as an argument.
//constructor functions act like blueprints for objects. 
test('creates a health potion object', () => {
  const potion = new Potion('health');

  expect(potion.name).toBe('health');
  expect(potion.value).toEqual(expect.any(Number));
});

test('creates a random potion object', () => {
  const potion = new Potion();

  expect(potion.name).toEqual(expect.any(String));
  expect(potion.name.length).toBeGreaterThan(0);
  expect(potion.value).toEqual(expect.any(Number));
});