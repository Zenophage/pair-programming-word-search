const chai = require('chai');
const assert = chai.assert;

const wordSearch = require('../wordsearch.js')

describe("#wordSearch()", function() {
  it('Should return undefined if given an empty array', () => {
    const result = wordSearch([]);
    assert(result === undefined);
  })
  it('Should return undefined if given an empty word', () => {
    const result = wordSearch(["A"], "");
    assert(result === undefined);
  })
  
  it("should return false if the word is not present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FRANK')

    assert.isFalse(result);
  });

  it("should return true if the word is present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD')

    assert.isTrue(result);
  });
  
  it("should return true if the word is present vertically", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'O', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'O', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'B', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'A', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'L', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'L', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FOOTBALL')

    assert.isTrue(result);
  });
  it("should return true if the word is present backwards horizonaltally", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'O', 'F', 'E', 'L', 'D'],
      ['L', 'L', 'A', 'B', 'T', 'O', 'O', 'F'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'B', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'J', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'L', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'L', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FOOTBALL')

    assert.isTrue(result);
  });
  it("should return true if the word is present backward vertically", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'L', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'L', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'A', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'B', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'T', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'O', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'O', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'F', 'U', 'A', 'L'],
    ], 'FOOTBALL')

    assert.isTrue(result);
  });
  it("should return true if the word is present diagonally", function() {
    const result = wordSearch([
      ['G', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'R', 'I', 'N', 'L', 'E', 'L', 'D'],
      ['Y', 'F', 'O', 'F', 'L', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'O', 'A', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'V', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'T', 'Y', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'O', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'O', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'F', 'U', 'A', 'L'],
    ], 'GROOVY')

    assert.isTrue(result);
  });
  it("should return true if the word is present diagonally the other way", function() {
    const result = wordSearch([
      ['G', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'R', 'I', 'N', 'L', 'E', 'L', 'D'],
      ['Y', 'F', 'O', 'F', 'L', 'U', 'A', 'W'],
      ['H', 'M', 'J', 'O', 'A', 'V', 'O', 'G'],
      ['W', 'H', 'C', 'S', 'V', 'L', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'L', 'Y', 'Y', 'B'],
      ['U', 'B', 'T', 'E', 'O', 'P', 'A', 'I'],
      ['O', 'D', 'Y', 'A', 'O', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'F', 'U', 'A', 'L'],
    ], 'YELLOW')

    assert.isTrue(result);
  });
});
