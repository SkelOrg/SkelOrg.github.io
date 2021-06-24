// Variables
var pagelist = ["home","documentation","recipes","downloads","keypad","skel","about"];

// Commands
// Send user to the page they specified
function gotopage(page) {
  if (page === "about") {
    console.log("Going to '".concat(pagelist[6]).concat("'."));
    window.location.replace("https://skelebrine.github.io/about.html");
  } else if (page === "documentation") {
    console.log("Going to '".concat(pagelist[1]).concat("'."));
    window.location.replace("https://skelebrine.github.io/documentation.html");
  } else if (page === "home") {
    console.log("Going to '".concat(pagelist[0]).concat("'."));
    window.location.replace("https://skelebrine.github.io/index.html");
  } else if (page === "recipes") {
    console.log("Going to '".concat(pagelist[2]).concat("'."));
    window.location.replace("https://skelebrine.github.io/recipesdocumentation/recipes.html");
  } else if (page === "downloads") {
    console.log("Going to '".concat(pagelist[3]).concat("'."));
    window.location.replace("https://skelebrine.github.io/download.html");
  } else if (page === "keypad") {
    console.log("Going to '".concat(pagelist[4]).concat("'."));
    window.location.replace("https://skelebrine.github.io/keypad.html");
  } else if (page === "skel") {
    console.log("Going to '".concat(pagelist[5]).concat("'."));
    window.location.replace("https://skelebrine.github.io/skel.html");
  } else {
    console.error("That page doesn't exist. A list of the pages are ".concat(pagelist));
  }
}
