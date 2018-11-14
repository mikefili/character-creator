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
var divCharacterResults = document.getElementById('character-results');

var pRace = document.createElement('p');
pRace.textContent = 'Race: ' + charRace;
divCharacterResults.append(pRace);

var pClass = document.createElement('p');
pClass.textContent = 'Class: ' + charClass;
divCharacterResults.append(pClass);

var pBackground = document.createElement('p');
pBackground.textContent = 'Background: ' + charBackground;
divCharacterResults.appendChild(pBackground);

var pAlignment = document.createElement('p');
pAlignment.textContent = 'Alignment: ' + charAlignment;
divCharacterResults.append(pAlignment);

//Adding event listener for the button for generating random gender
document.getElementById('random-gender').addEventListener('click', generateRandomGender);

//Generate random gender if randomizer button is clicked.
function generateRandomGender() {
  var randomindex = Math.floor(Math.random() * 2);
  document.getElementById('gender-dd').value = randomindex;
  genderSelected = document.getElementById('gender-dd').options[document.getElementById('gender-dd').selectedIndex].text;
}

function showCharacterImage() {
  //Set gender based on dropdown selection. Need to set anytime this is triggered by a dropdown change.
  genderSelected = document.getElementById('gender-dd').options[document.getElementById('gender-dd').selectedIndex].text;

  //delete current image if there is one before creating a new one
  var existingImage = document.getElementById('character-image');
  if (existingImage != null) {
    existingImage.parentNode.removeChild(existingImage);
  }

  //Set charImagePath to the folder that has the images and uses a filename race_gender.png
  charImagePath = `./assets/Character Images/${charRace}_${genderSelected}.png`

  //create a new element 'img' and add to character-details div
  var charImage = document.createElement('img');
  charImage.setAttribute('src', charImagePath);
  charImage.setAttribute('id', 'character-image');

  var divCharacterDetails = document.getElementById('character-details');
  divCharacterDetails.appendChild(charImage);
}