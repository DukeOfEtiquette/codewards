const assert = require('chai').assert;
const app = require('./solution');

describe('Dead Fish', () => {
  it('should return [ 8, 64 ]', () => {
    let result = app("iiisdoso");
    let expected = [ 8, 64 ];
    assert.deepEqual(result, expected);
  });
});