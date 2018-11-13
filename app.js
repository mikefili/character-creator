'use strict';

var racearray = ['ta', 'tb', 'tx', 'td', 'te', 'tf', 'tyyy', 'trrrr', 'grw4gw'];
//chose random race

document.getElementById('randomrace').addEventListener('click', generaterandomrace);
function generaterandomrace() {

  var randomindex = Math.floor(Math.random() * 9);
  document.getElementById('b').value = racearray[randomindex];
  document.getElementById('a').value = randomindex;
}

//choose race

function showrace() {

  var selectedrace = document.getElementById('a').value;
  document.getElementById('b').value = racearray[selectedrace];
}
showrace();

// choose random class

var classarray = ['1', 'a', '3', '5', 'ff', 'ffsf', 'er', 'g', 'ty', 'jh', 'j', 'rhfn'];
document.getElementById('randomclass').addEventListener('click', generaterandomclass);

function generaterandomclass() {

  var randomindex = Math.floor(Math.random() * 12);
  document.getElementById('d').value = classarray[randomindex];
  document.getElementById('c').value = randomindex;
}

// choose class

function showclass() {

  var selectedrace = document.getElementById('c').value;
  document.getElementById('d').value = classarray[selectedrace];
}
showclass();

// Generate random class for third button randomize

var backgroundarray = ['description', 'description', 'description', 'description', 'description', 'description', 'description', 'description', 'description', 'description', 'description', 'description', 'description'];
document.getElementById('randombackground').addEventListener('click', generaterandombackground);

function generaterandombackground() {

  var randomindex = Math.floor(Math.random() * 13);
  document.getElementById('f').value = backgroundarray[randomindex];
  document.getElementById('e').value = randomindex;

}

function showThirdClass() {

  var randomThird = document.getElementById('e').value;
  document.getElementById('f').value = backgroundarray[randomThird];

}

showThirdClass();






document.getElementById('randomize-all').addEventListener('click', generateAllclasses);
function generateAllclasses(event) {
  
event.preventDefault();

  generaterandomrace();
  generaterandomclass();
  generaterandombackground();
  generaterandomalignment();
}




//pick one button from 9 options;

var n = 0;
var buttonel = document.querySelectorAll('.alel');
for (var i = 0; i < buttonel.length; i++) {
  buttonel[i].index = i;
  buttonel[i].setAttribute('isAct', '0');
  buttonel[i].onclick = function () {
    var isAct = this.getAttribute('isAct');
    if (Number(isAct)) {
      this.setAttribute('isAct', '0');
    }
    else {

      buttonel[n].setAttribute('isAct', '0');
      this.setAttribute('isAct', '1');
      n = this.index;
    }
  };



}

//randomly pick one button
document.getElementById('randomalignment').addEventListener('click', generaterandomalignment);

function generaterandomalignment() {

  var buttonel = document.querySelectorAll('.alel');

  var randomindexnumber = Math.floor(Math.random() * 9);
  for (var i = 0; i < buttonel.length; i++) {

    buttonel[i].setAttribute('isAct', '0');
  }

  buttonel[randomindexnumber].setAttribute('isAct', '1');
}




function displayResults() {
 
    var allOptions = document.getElementById("generatethirdclass").options.length;
    var allOptions = document.getElementById("c").options.length;
    var allOptions = document.getElementById("a").options.length;
    var allOptions = document.getElementById("generatethirdclass").options.length;
    document.getElementById("demo").innerHTML = "Found " + x + " options in the list.";


}