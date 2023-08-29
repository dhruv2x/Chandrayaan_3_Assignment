function turnUp(Direction) {
    if (Direction == "N" || Direction == "S" || Direction == "E" || Direction == "W") {
      return "U";
    }
    if (Direction === "U") {
      return "D";
    }
    if (Direction === "D") {
      return "S";
    }
    
  }
  
  module.exports = {
    turnUp,
  };
  
