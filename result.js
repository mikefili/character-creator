var lsRace = JSON.parse(localStorage.getItem('race'));
var lsClass = JSON.parse(localStorage.getItem('class'));
var lsBackground = JSON.parse(localStorage.getItem('background'));
var lsAlignment = JSON.parse(localStorage.getItem('alignment'));

var divCharacterResults = document.getElementById('character-results');

var pRace = document.createElement('p');
pRace.textContent = 'Race: ' + lsRace[lsRace.length - 1];
divCharacterResults.append(pRace);


var pClass = document.createElement('p');
pClass.textContent = 'Class: ' + lsClass[lsClass.length - 1];
divCharacterResults.append(pClass);

var pBackground = document.createElement('p');
pBackground.textContent = 'Background: ' + lsBackground[lsBackground.length - 1];
divCharacterResults.appendChild(pBackground);

var pAlignment = document.createElement('p');
pAlignment.textContent = 'Alignment: ' + lsAlignment[lsAlignment.length - 1];
divCharacterResults.append(pAlignment);