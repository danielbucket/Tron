let playerTwoTimer;
let bikeTwo;
let coordinateArray = [];

export default function playerTwoAI (importBikeTwo, importCoordinateArray) {
  bikeTwo = importBikeTwo
  coordinateArray = importCoordinateArray;
  clearTimeout(playerTwoTimer);
  coordinateArray.find(function(locale) {
    if ((bikeTwo.direction == 'up' && bikeTwo.locationY < 40)
      || (bikeTwo.direction == 'down' && bikeTwo.locationY > 510)) {
      evaluateVertical();
    }

    if ((bikeTwo.direction == 'left' && bikeTwo.locationX < 40)
      || (bikeTwo.direction == 'right' && bikeTwo.locationX > 960)) {
      evaluateHorizontal();
    }

    if (bikeTwo.direction == 'left' && (
      locale === ((bikeTwo.locationX - 30) + "," + bikeTwo.locationY) ||
      locale === ((bikeTwo.locationX - 20) + "," + bikeTwo.locationY) ||
      locale === ((bikeTwo.locationX - 10) + "," + bikeTwo.locationY))) {
      evaluateHorizontal();
    }

    if (bikeTwo.direction == 'right' && (
      locale === ((bikeTwo.locationX + 30) + "," + bikeTwo.locationY) ||
      locale === ((bikeTwo.locationX + 20) + "," + bikeTwo.locationY) ||
      locale === ((bikeTwo.locationX + 10) + "," + bikeTwo.locationY))) {
      evaluateHorizontal();
    }

    if (bikeTwo.direction == 'up' && (
      locale === (bikeTwo.locationX + "," + (bikeTwo.locationY - 30)) ||
      locale === (bikeTwo.locationX + "," + (bikeTwo.locationY - 20)) ||
      locale === (bikeTwo.locationX + "," + (bikeTwo.locationY - 10)))) {
      evaluateVertical();
    }

    if (bikeTwo.direction == 'down' && (
      locale === (bikeTwo.locationX + "," + (bikeTwo.locationY + 30)) ||
      locale === (bikeTwo.locationX + "," + (bikeTwo.locationY + 20)) ||
      locale === (bikeTwo.locationX + "," + (bikeTwo.locationY + 10)))) {
      evaluateVertical();
    }
  });
}

const evaluateHorizontal = () => {
  coordinateArray.find(function(locale) {
    if (locale === bikeTwo.locationX + "," + (bikeTwo.locationY + 20) ||
        locale === bikeTwo.locationX + "," + (bikeTwo.locationY + 10)) {
      bikeTwo.direction = 'up'
      return bikeTwo.direction;
    }
    else if (locale === bikeTwo.locationX + "," + (bikeTwo.locationY - 20) ||
             locale === bikeTwo.locationX + "," + (bikeTwo.locationY - 10)) {
      bikeTwo.direction = "down";
      return bikeTwo.direction;
    }
    else if (bikeTwo.locationX < 50 || bikeTwo.locationX > 950) {
      let newDirection = Math.round(Math.random());

      switch (newDirection) {
        case 0: bikeTwo.direction = "up"; return bikeTwo.direction;
        case 1: bikeTwo.direction = "down"; return bikeTwo.direction;
      }

    } else {
      let newDirection = Math.round(Math.random());

      switch (newDirection) {
        case 0: bikeTwo.direction = "up"; return bikeTwo.direction;
        case 1: bikeTwo.direction = "down"; return bikeTwo.direction;
      }
    }
  })
}

const evaluateVertical = () => {
  coordinateArray.find(function(locale) {
    if (locale === ((bikeTwo.locationX + 20) + "," + bikeTwo.locationY) ||
        locale === ((bikeTwo.locationX + 10) + "," + bikeTwo.locationY)) {

      bikeTwo.direction = 'left'
      return bikeTwo.direction;
    }
    else if (locale === ((bikeTwo.locationX - 20) + "," + bikeTwo.locationY) ||
             locale === ((bikeTwo.locationX - 10) + "," + bikeTwo.locationY)) {

      bikeTwo.direction = "right";
      return bikeTwo.direction;
    }
    else if (bikeTwo.locationY <= 50 || bikeTwo.locationY >= 500) {
      let newDirection = Math.round(Math.random());

      switch (newDirection) {
        case 0: bikeTwo.direction = "right"; return bikeTwo.direction;
        case 1: bikeTwo.direction = "left"; return bikeTwo.direction;
      }

    } else {
      let newDirection = Math.round(Math.random());

      switch (newDirection) {
        case 0: bikeTwo.direction = "right"; return bikeTwo.direction;
        case 1: bikeTwo.direction = "left"; return bikeTwo.direction;
      }
    }
  });
}
