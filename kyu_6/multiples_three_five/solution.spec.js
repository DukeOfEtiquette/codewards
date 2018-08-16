const assert = require('chai').assert;
const app = require('./solution');

describe('Multiples Three Five', () => {

  it('should return 23', () => {
    let result = app(10);
    let expected = 23;
    assert.equal(result, expected);

  });
});