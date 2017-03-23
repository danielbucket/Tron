const assert = require('chai').assert;
const Bike = require('../lib/Bike.js');

describe('Analyze the Bike class', () => {

  it('1: should not be a property of Bike', () => {
    var bike = new Bike();

    assert.notProperty(bike, 'bishop of whales');
    assert.notProperty(bike, 'saddisticEarthworm');
    assert.notProperty(bike, 'FlashyFishSticks');
    assert.notProperty(bike, 'pollio');
    assert.notProperty(bike, 'tyranny');

  })

  it('1: should be an instance of Bike', () => {
    var bike = new Bike();

    assert.instanceOf(bike, Bike);
  })

  it('2: should be a constructor function', () => {
    var bike = new Bike(5, 10, 'large', 'red', 'up', true)

    assert.instanceOf(bike, Bike, 'is an instance of bike')
  })

  it('3: should be an object', () => {
    var bike = new Bike(5, 10, 'large', 'red', 'up', true)

    assert.isObject(bike)
  })

  it('4: should have the following properties', () => {
    var bike = new Bike(5, 10, 'large', 'red', 'up', true)

    assert.property(bike, 'locationX')
    assert.property(bike, 'locationY')
    assert.property(bike, 'size')
    assert.property(bike, 'color')
    assert.property(bike, 'direction')
    assert.property(bike, 'lives')
  })

  it('5: should have properties', () => {
    var bike = new Bike(5, 10, 'large', 'red', 'up', true)

    assert.equal(bike.locationX, 5)
    assert.equal(bike.locationY, 10)
    assert.equal(bike.size, 'large')
    assert.equal(bike.color, 'red')
    assert.equal(bike.direction, 'up')
  })

  it('6: should have three lives by default', () => {
    var bike = new Bike()

    assert.equal(bike.lives, 3)
  })

  it('7: should have as many lives as are passed in', () => {
    var bike = new Bike(0, 0, 0, 0, 0, 5)

    assert.equal(bike.lives, 5)
  })

  it('8: should have a draw function', () => {
    var bike = new Bike(5, 10, 'large', 'red', 'up', true)

    assert.isFunction(bike.draw)
  })

  it('9: should have a checkDirection function', () => {
    var bike = new Bike(5, 10, 'large', 'red', 'up', true)

    assert.isFunction(bike.checkDirection)
  })

  it('10: should have an evaluateDirection function', () => {
    var bike = new Bike(5, 10, 'large', 'red', 'right', true)

    assert.isFunction(bike.evaluateDirection)
  })

  it('11: should not be allowed to reverse direction', () => {
    var bike = new Bike(5, 10, 'large', 'red', 'right', true)
    let proposedDirection = "left";

    bike.checkDirection(proposedDirection);
    assert.equal(bike.direction, 'right');
    assert.isString(bike.direction)
  })

  it('12: should have a move function', () => {
    var bike = new Bike(5, 10, 'large', 'red', 'up', true)

    assert.isFunction(bike.move);
  })

  it('13: should move in response to input', () => {
    var bike = new Bike(30, 10, 20, 'red', 'up', true)

    bike.move("left")
    assert.equal(bike.locationX, 10)
    bike.move("up")
    assert.equal(bike.locationY, -10)
    bike.move("right")
    assert.equal(bike.locationX, 30)
    bike.move("down")
    assert.equal(bike.locationY, 10)
  })

  it('14: should have a travelTracker function', () => {
    var bike = new Bike(5, 10, 'large', 'red', 'up', true)

    assert.isFunction(bike.travelTracker)
  })

  it('15: should have a youDie function', () => {
    var bike = new Bike(1000, 3, 10, 'red', 'up')

    assert.isFunction(bike.youDie)
  })

  it.skip('16: should lose a life when it leaves the game grid', () => {
    var bike = new Bike(1000, 3, 10, 'red', 'up')

    let stopAnimation = false
    let coordinateArray = []
    bike.stopAnimation = false

    assert.equal(bike.lives, 3)
    bike.youDie(coordinateArray, stopAnimation)
    assert.isArray(coordinateArray)
    assert.isNumber(bike.lives)
    assert.equal(bike.lives, 2)
    // assert.isTrue(stopAnimation)
  })

  it.skip('17: should decrease the live count', () => {
    var bike = new Bike(1000, 3, 10, 'red', 'up', 3)

    assert.decreases(bike.youdie, bike, 2)
  })

  it('18: should lose a life when it the location arrays are identical', () => {
    var bike = new Bike(10, 30, 10, 'red', 'up')

    let stopAnimation = false
    let testArrayOne = ["10,30"]

    assert.equal(bike.lives,  3)
    assert.isAbove(bike.lives, 2)
    assert.isBelow(bike.lives, 4)
    assert.isAtMost(bike.lives, 3)
    assert.isAtLeast(bike.lives, 3)
    bike.youDie(testArrayOne, stopAnimation)
    assert.isArray(testArrayOne)
    assert.isNumber(bike.lives)
    assert.equal(bike.lives, 2)
    assert.isAbove(bike.lives, 1)
    assert.isBelow(bike.lives, 3)
    assert.isAtMost(bike.lives, 2)
    assert.isAtLeast(bike.lives, 2)
  })
});
