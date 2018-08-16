const assert = require('chai').assert;
const app = require('./solution');

describe('Build Tower', () => {
  it('should return a single splat', () => {
    let result = app(1);
    let expected = ['*'];
    assert.deepEqual(result, expected);
  });

  it('should return a tuple of splats', () => {
    let result = app(2);
    let expected = [' * ', '***'];
    assert.deepEqual(result, expected);
  });

  it('should return a three element array of splats', () => {
    let result = app(3);
    let expected = ["  \*  "," \*\*\* ","\*\*\*\*\*"];
    assert.deepEqual(result, expected);
  })

});