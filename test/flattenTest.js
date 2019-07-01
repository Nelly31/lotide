const flatten = require('../flatten');
const assert = require('chai').assert;

describe('#flatten', () => {
  it('returns a single array when passed a single array', () => {
    assert.deepEqual(flatten([1,2,3]), [1,2,3]);
  });

  it('returns a single array when passed an array with 2 arrays', () => {
    assert.deepEqual(flatten([[1,2],[3]]), [1,2,3]);
  });

  it('returns an empty array when passed an array with empty arrays', () => {
    assert.deepEqual(flatten([[],[],[[]]]), []);
  });

});
