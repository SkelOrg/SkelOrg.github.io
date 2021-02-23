var cell1on = false;
var cell2on = false;
var cell3on = false;

function createlive1() {
  if (cell1on === false) {
    document.getElementById("cell1").style.background='#ffffff';
    cell1on = true;
  } else {
    document.getElementById("cell1").style.background='#1a1a1a';
    cell1on = false;
  }
}
function createlive2() {
  if (cell2on === false) {
    document.getElementById("cell2").style.background='#ffffff';
    cell2on = true;
  } else {
    document.getElementById("cell2").style.background='#1a1a1a';
    cell2on = false;
  }
}
function createlive3() {
  if (cell3on === false) {
    document.getElementById("cell3").style.background='#ffffff';
    cell3on = true;
  } else {
    document.getElementById("cell3").style.background='#1a1a1a';
    cell3on = false;
  }
}
function submitcode() {
  if (cell1on === false && cell2on === true && cell3on === false) {
    location.href = 'home.html';
  }
}
