const Potion = require('../lib/Potion'); //imports the Potion() constructor into the test
jest.mock('../lib/Potion'); //mocks/replaces the constructor's implementation with our faked data.
console.log(new Potion());

const { TestScheduler } = require('jest');
const Player = require('../lib/Player');

test('creates a player object', () => {
  const player = new Player('Dave');

  expect(player.name).toBe('Dave');
  expect(player.health).toEqual(expect.any(Number));
  expect(player.agility).toEqual(expect.any(Number));
  expect(player.inventory).toEqual(
    expect.arrayContaining([expect.any(Object)])
  );
});