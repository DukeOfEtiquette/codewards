const assert = require('chai').assert;
const app = require('./solution');

describe('Highest Scoring Word', () => {
  it('should return taxi', () => {
    let result = app('man i need a taxi up to ubud');
    let expected = 'taxi';
    assert.equal(result, expected);
  });

  it('should return volcano', () => {
    let result = app('what time are we climbing up the volcano');
    let expected = 'volcano';
    assert.equal(result, expected);
  });

  it('should return volcano', () => {
    let result = app('take me to semynak');
    let expected = 'semynak';
    assert.equal(result, expected);
  });
});