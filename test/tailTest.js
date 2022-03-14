const tail = require('../tail');
const assert = require('chai').assert;


describe('#Tail Test', () => {

  it('should return for empty array [] for one element array input []', () => {
    assert.deepEqual(tail([]), []);
  });
  it('should return [6]]or an array input [5, 6]', () => {
    assert.deepEqual(tail([5, 6]), [6]);
  });
  it("should return ['you', 'theWorld'] for an array input ['me', 'you', 'theWorld']", () => {
    assert.deepEqual(tail(['me', 'you', 'theWorld']), ['you', 'theWorld']);
  });

});