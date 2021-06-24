// Game Logic
var gameText = ["Beat level ","level",".html","You Failed!","Resetting to Level 1."];

function fail() {
  console.error(gameText[3]);
  window.location.replace("fail.html");
}

function start() {
  console(gameText[4])
  window.location.replace("level1.html");
}

function win(levelname) {
  console.log(gameText[0].concat(levelname));
  window.location.replace(gameText[1].concat(levelname).concat(gameText[2]));
}

function music() {
    document.getElementById('backgroundaudio').play();
}

// Debug Keys: DO NOT EDIT
var DebugKeys = ["D2A868926571B73DB9D59B9954D72","66B6D2863633B88F716FD5BB2F587","5A277159DA2D298798347BB23B1C5"];

// Debug Commands
var debugText = ["Warning: Debug Key 1 has not been used.", "Warning: Debug Key 1 and 2 has not been used.","Error: No debug key was entered or entered debug key is invalid."]

function setlevel(levelnumber, debugkey) {
  if (debugkey === DebugKeys[0]) {
    console.log("Going to level ".concat(levelnumber).concat("."));
    window.location.replace(gameText[1].concat(levelnumber).concat(gameText[2]));
  } else if (debugkey === DebugKeys[1]) {
    console.warn(debugText[0]);
    console.log("Going to level ".concat(levelnumber).concat("."));
    window.location.replace(gameText[1].concat(levelnumber).concat(gameText[2]));
  } else if (debugkey === DebugKeys[2]) {
    console.warn(debugText[1]);
    console.log("Going to level ".concat(levelnumber).concat("."));
    window.location.replace(gameText[1].concat(levelnumber).concat(gameText[2]));
  } else {
    console.error(debugText[2])
  }
}
