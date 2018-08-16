const assert = require('chai').assert;
const app = require('./solution');

describe('Give Me Diamond', () => {
  it('should return  *\\n***\\n *\\n', () => {
    let result = app(3);
    let expected = " *\n***\n *\n";
    assert.equal(result, expected);
  });

  it('should return null with input 2', () => {
    let result = app(2);
    assert.isNull(result);
  });

  it('should return null with input -3', () => {
    let result = app(-3);
    assert.isNull(result);
  });

  it('should return null with input 0', () => {
    let result = app(0);
    assert.isNull(result);
  });
});