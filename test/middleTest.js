const assert = require('chai').assert;
const middle = require('../middle');
const assertArraysEqual = require('../assertArrayEqual')


describe("#middle", () => {

  it ('should return [3] for [1, 2, 3, 4, 5]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
  
  it ('should return [3, 4] for [1, 2, 3, 4, 5, 6]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3,4])
  });

  it ('should return [] for [1]', () => {
    assert.deepEqual(middle([1]), [])
  })

});