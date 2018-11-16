'use strict';

var genderSelected;

//Get all stored option arrays
var storedRaces = JSON.parse(localStorage.getItem('race'));
var storedClasses = JSON.parse(localStorage.getItem('class'));
var storedBackgrounds = JSON.parse(localStorage.getItem('background'));
var storedAlignments = JSON.parse(localStorage.getItem('alignment'));

//Get latest chosen options
var charRace = storedRaces[storedRaces.length - 1];
var charClass = storedClasses[storedClasses.length - 1];
var charBackground = storedBackgrounds[storedBackgrounds.length - 1];
var charAlignment = storedAlignments[storedAlignments.length - 1];

//Get the character results div that will hold the results from the page before
var divCharacterResults = document.getElementById('character-details');

//Append the character race to the character-details div as a p tag
var pRace = document.createElement('p');
pRace.textContent = 'Race: ' + charRace;
divCharacterResults.appendChild(pRace);

//Append the character class to the character-details div as a p tag
var pClass = document.createElement('p');
pClass.textContent = 'Class: ' + charClass;
divCharacterResults.appendChild(pClass);

//Append the character background to the character-details div as a p tag
var pBackground = document.createElement('p');
pBackground.textContent = 'Background: ' + charBackground;
divCharacterResults.appendChild(pBackground);

//Append the character alignment to the character-details div as a p tag
var pAlignment = document.createElement('p');
pAlignment.textContent = 'Alignment: ' + charAlignment;
divCharacterResults.appendChild(pAlignment);

//Adding event listener for the button for generating random gender
document.getElementById('random-gender').addEventListener('click', generateRandomGender);

//Generate random gender if randomizer button is clicked.
function generateRandomGender() {
  var randomindex = Math.floor(Math.random() * 2);
  document.getElementById('gender-dd').value = randomindex;
  genderSelected = document.getElementById('gender-dd').options[document.getElementById('gender-dd').selectedIndex].text;
}

//Creating a submit button that shows the character image when clicked
document.getElementById('submit').addEventListener('click', showCharacterImage);

function showCharacterImage() {

  //Show name information
  var el=document.getElementById('nameinformation');
  var nameinfo=document.getElementById('name');
  var pel=document.createElement('p');

  if (pel.textContent!==null){
    el.innerHTML='';
    pel.textContent='Name: ' + nameinfo.value;
    el.appendChild(pel);
  } else {
    pel.textContent = 'Name: ' + nameinfo.value;
    el.appendChild(pel);
  }

  //Show age information
  var eel = document.getElementById('ageinformation');
  var ageinfo = document.getElementById('age');
  var ppel = document.createElement('p');

  if (ppel.textContent!==null){
    eel.innerHTML='';
    ppel.textContent='Age: ' + ageinfo.value;
    eel.appendChild(ppel);
  } else {
    ppel.textContent='Age: ' + ageinfo.value;
    eel.appendChild(ppel);
  }

  //Show gender information
  var eeel = document.getElementById('genderinformation');
  var pppel = document.createElement('p');

  if (pppel.textContent!==null){
    eeel.innerHTML='';
    pppel.textContent='Gender: ' + document.getElementById('gender-dd').options[document.getElementById('gender-dd').selectedIndex].text;
    console.log(pppel);
    eeel.appendChild(pppel);
  } else {
    pppel.textContent='Gender: ' + document.getElementById('gender-dd').options[document.getElementById('gender-dd').selectedIndex].text;
    eeel.appendChild(ppel);
  }

  //Show character image
  genderSelected = document.getElementById('gender-dd').options[document.getElementById('gender-dd').selectedIndex].text;
  var existingImage = document.getElementById('character-image');

  //Set charImagePath to the folder that has the images and uses a filename race_gender.png
  var charImagePath = `./assets/Character Images/${charRace}_${genderSelected}.png`;
  var divCharacterDetails = document.getElementById('character-details');

  //create a new element 'img' and add to character-details div
  var charImage = document.createElement('img');

  if (existingImage !== null) {
    existingImage.parentNode.removeChild(existingImage);
    charImage.setAttribute('src', charImagePath);
    charImage.setAttribute('id', 'character-image');
    divCharacterDetails.appendChild(charImage);

    if (charAlignment === 'Lawful Good') {
      document.getElementById('character-image').style.border = '2vw solid lightgreen';
    } else if (charAlignment === 'Lawful Neutral') {
      document.getElementById('character-image').style.border = '2vw solid rgb(83, 216, 83)';
    } else if (charAlignment === 'Lawful Evil') {
      document.getElementById('character-image').style.border = '2vw solid rgb(19, 216, 19)';
    } else if (charAlignment === 'Neutral Good') {
      document.getElementById('character-image').style.border = '2vw solid lightyellow';
    } else if (charAlignment === 'True Neutral') {
      document.getElementById('character-image').style.border = '2vw solid rgb(255, 255, 136)';
    } else if (charAlignment === 'Neutral Evil') {
      document.getElementById('character-image').style.border = '2vw solid rgb(255, 255, 89)';
    } else if (charAlignment === 'Chaotic Good') {
      document.getElementById('character-image').style.border = '2vw solid lightcoral';
    } else if (charAlignment === 'Chaotic Neutral') {
      document.getElementById('character-image').style.border = '2vw solid rgb(240, 99, 99)';
    } else {
      document.getElementById('character-image').style.border = '2vw solid rgb(240, 52, 52)';
    }
  } else {
    charImage.setAttribute('src', charImagePath);
    charImage.setAttribute('id', 'character-image');
    divCharacterDetails.appendChild(charImage);

    if (charAlignment === 'Lawful Good') {
      document.getElementById('character-image').style.border = '2vw solid lightgreen';
    } else if (charAlignment === 'Lawful Neutral') {
      document.getElementById('character-image').style.border = '2vw solid rgb(83, 216, 83)';
    } else if (charAlignment === 'Lawful Evil') {
      document.getElementById('character-image').style.border = '2vw solid rgb(19, 216, 19)';
    } else if (charAlignment === 'Neutral Good') {
      document.getElementById('character-image').style.border = '2vw solid lightyellow';
    } else if (charAlignment === 'True Neutral') {
      document.getElementById('character-image').style.border = '2vw solid rgb(255, 255, 136)';
    } else if (charAlignment === 'Neutral Evil') {
      document.getElementById('character-image').style.border = '2vw solid rgb(255, 255, 89)';
    } else if (charAlignment === 'Chaotic Good') {
      document.getElementById('character-image').style.border = '2vw solid lightcoral';
    } else if (charAlignment === 'Chaotic Neutral') {
      document.getElementById('character-image').style.border = '2vw solid rgb(240, 99, 99)';
    } else {
      document.getElementById('character-image').style.border = '2vw solid rgb(240, 52, 52)';
    }
  }
}