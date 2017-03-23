const assert = require('chai').assert;
const BikeTwoAI = require('../lib/BikeTwoAI.js')

describe('One test for posterity\'s sake', () => {

  it('should be a module', () => {
    var bikeTwo = BikeTwoAI;

    assert.isObject(bikeTwo, 'this test doesnt test for anything useful')
  })
})
