function turnLeft(Direction) {
    if (Direction === "N") {
      return "W";
    }
    if (Direction === "S") {
      return "E";
    }
    if (Direction === "E") {
      return "N";
    }
    if (Direction === "W") {
      return "S";
    }
    if (Direction === "U") {
      return "W";
    }
    if (Direction === "D") {
      return "E";
    }   
  }
  
  module.exports = {
    turnLeft,
  };
  