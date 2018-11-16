'use-strict';

//var result=[];
var raceoptions = [];
var classoptions = [];
var backgroundoptions = [];
var alignmentoptions = [];

//Randomize-all button at the top
document.getElementById('randomize-all').addEventListener('click', generateAllclasses);
function generateAllclasses() {
  generaterandomrace();
  generaterandomclass();
  generaterandombackground();
  generaterandomalignment();
}

var racearray = [
  'Kingdoms rich in ancient grandeur, halls carved into the roots of mountains, the echoing of picks and hammers in deep mines and blazing forges, a commitment to clan and tradition, and a burning hatred of goblins and orcs—these common threads unite all dwarves.',
  'Elves are a magical people of otherworldly grace, living in the world but not entirely part of it. They live in places of ethereal beauty, in the midst of ancient forests or in silvery spires glittering with faerie light, where soft music drifts through the air and gentle fragrances waft on the breeze. Elves love nature and magic, art and artistry, music and poetry, and the good things of the world.',
  'The comforts of home are the goals of most halflings’ lives: a place to settle in peace and quiet, far from marauding monsters and clashing armies; a blazing fire and a generous meal; fine drink and fine conversation. Though some halflings live out their days in remote agricultural communities, others form nomadic bands that travel constantly, lured by the open road and the wide horizon to discover the wonders of new lands and peoples. But even these wanderers love peace, food, hearth, and home, though home might be a wagon jostling along a dirt road or a raft floating downriver.',
  'In the reckonings of most worlds, humans are the youngest of the common races, late to arrive on the world scene and short-lived in comparison to dwarves, elves, and dragons. Perhaps it is because of their shorter lives that they strive to achieve as much as they can in the years they are given. Or maybe they feel they have something to prove to the elder races, and that’s why they build their mighty empires on the foundation of conquest and trade. Whatever drives them, humans are the innovators, the achievers, and the pioneers of the worlds.',
  'Born of dragons, as their name proclaims, the dragonborn walk proudly through a world that greets them with fearful incomprehension. Shaped by draconic gods or the dragons themselves, dragonborn originally hatched from dragon eggs as a unique race, combining the best attributes of dragons and humanoids. Some dragonborn are faithful servants to true dragons, others form the ranks of soldiers in great wars, and still others find themselves adrift, with no clear calling in life.',
  'A constant hum of busy activity pervades the warrens and neighborhoods where gnomes form their close-knit communities. Louder sounds punctuate the hum: a crunch of grinding gears here, a minor explosion there, a yelp of surprise or triumph, and especially bursts of laughter. Gnomes take delight in life, enjoying every moment of invention, exploration, investigation, creation, and play.',
  'Walking in two worlds but truly belonging to neither, half-elves combine what some say are the best qualities of their elf and human parents: human curiosity, inventiveness, and ambition tempered by the refined senses, love of nature, and artistic tastes of the elves. Some half-elves live among humans, set apart by their emotional and physical differences, watching friends and loved ones age while time barely touches them. Others live with the elves, growing restless as they reach adulthood in the timeless elven realms, while their peers continue to live as children. Many half-elves, unable to fit into either society, choose lives of solitary wandering or join with other misfits and outcasts in the adventuring life.',
  'Whether united under the leadership of a mighty warlock or having fought to a standstill after years of conflict, orc and human tribes sometimes form alliances, joining forces into a larger horde to the terror of civilized lands nearby. When these alliances are sealed by marriages, half-orcs are born. Some half-orcs rise to become proud chiefs of orc tribes, their human blood giving them an edge over their full-blooded orc rivals. Some venture into the world to prove their worth among humans and other more civilized races. Many of these become adventurers, achieving greatness for their mighty deeds and notoriety for their barbaric customs and savage fury.',
  'To be greeted with stares and whispers, to suffer violence and insult on the street, to see mistrust and fear in every eye: this is the lot of the tiefling. And to twist the knife, tieflings know that this is because a pact struck generations ago infused the essence of Asmodeus—overlord of the Nine Hells—into their bloodline. Their appearance and their nature are not their fault but the result of an ancient sin, for which they and their children and their children’s children will always be held accountable.'];

// 'a' 'c' 'e'  are ids for input textarea.you can find them in index.html
//  'b'  'd'  'f' are ids for <select> you can find them in index.html

//Generate random character race
document.getElementById('randomrace').addEventListener('click', generaterandomrace);
function generaterandomrace() {
  var randomindex = Math.floor(Math.random() * 9);
  document.getElementById('b').textContent = racearray[randomindex];
  document.getElementById('a').value = randomindex;
  raceoptions.push(document.getElementById('a').options[document.getElementById('a').selectedIndex].text);
}

//Chose character race
//var racepick;
function showrace() {
  var selectedrace = document.getElementById('a').value;
  document.getElementById('b').textContent = racearray[selectedrace];
  // return racepick=racearray[selectedrace];
  raceoptions.push(document.getElementById('a').options[document.getElementById('a').selectedIndex].text);
}

showrace();

var classarray = [
  'A fierce warrior of primitive background who can enter a battle rage',
  'An inspiring magician whose power echoes the music of creation',
  'A priestly champion who wields divine magic in service of a higher power',
  'A priest of the Old Faith, wielding the powers of nature - moonlight and plant growth, fire and lightning – and adopting animal forms',
  'A master of martial combat, skilled with a variety of weapons and armor',
  'A master of martial arts, harnessing the power of the body in pursuit of physical and spiritual perfection',
  'A holy warrior bound to a sacred oath',
  'A warrior who uses martial prowess and nature magic to combat threats on the edges of civilization',
  'A scoundrel who uses stealth and trickery to overcome obstacles and enemies',
  'A spellcaster who draws on inherent magic from a gift or bloodline',
  'A wielder of magic that is derived from a bargain with an extraplanar entity',
  'A scholarly magic-user capable of manipulating the structures of reality'
];

//Generate random character class
document.getElementById('randomclass').addEventListener('click', generaterandomclass);
function generaterandomclass() {
  var randomindex = Math.floor(Math.random() * 12);
  document.getElementById('d').textContent = classarray[randomindex];
  document.getElementById('c').value = randomindex;
  classoptions.push(document.getElementById('c').options[document.getElementById('c').selectedIndex].text);
}

//Chose character class
function showclass() {
  var selectedclass = document.getElementById('c').value;
  document.getElementById('d').textContent = classarray[selectedclass];
  classoptions.push(document.getElementById('c').options[document.getElementById('c').selectedIndex].text);
}
showclass();

var backgroundarray = [
  'They have spent their life in the service of a temple to a specific god or pantheon of gods. They act as an intermediary between the realm of the holy and the mortal world, performing sacred rites and offering sacrifices in order to conduct worshipers into the presence of the divine. They are not necessarily a cleric—performing sacred rites is not the same thing as channeling divine power.',
  'They know what people want and they deliver, or rather, they promise to deliver. Common sense should steer people away from things that sound too good to be true, but common sense seems to be in short supply when they’re around. It’s a useful talent, and one that they’re perfectly willing to use for their advantage.',
  'They thrive in front of an audience. They know how to entrance them, entertain them, and even inspire them. Their poetics can stir the hearts of those who hear them, awakening grief or joy, laughter or anger. Their music raises peoples’ spirits or captures their sorrow. Their dance steps captivate, their humor cuts to the quick. Whatever techniques they use, their art is their life.',
  'They come from a humble social rank, but they are destined for so much more. Already the people of their home village regard them as their champion, and their destiny calls them to stand against the tyrants and monsters that threaten the common folk everywhere.',
  'They are a member of an artisan’s guild, skilled in a particular field and closely associated with other artisans. They are a well-established part of the mercantile world, freed by talent and wealth from the constraints of a feudal social order. They learned their skills as an apprentice to a master artisan, under the sponsorship of your guild, until they became a master in their own right.',
  'They lived in seclusion – either in a sheltered community such as a monastery, or entirely alone – for a formative part of their life. In their time apart from the clamor of society, they found quiet, solitude, and perhaps some of the answers they were looking for.',
  'They carry a noble title, and their family owns land, collects taxes, and wields significant political influence. They might be a pampered aristocrat unfamiliar with work or discomfort, a former merchant just elevated to the nobility, or a disinherited scoundrel with a disproportionate sense of entitlement. Or they could be an honest, hard-working landowner who cares deeply about the people who live and work on their land, keenly aware of their responsibility to them.',
  'They grew up in the wilds, far from civilization and the comforts of town and technology. They’ve witnessed the migration of herds larger than forests, survived weather more extreme than any city-dweller could comprehend, and enjoyed the solitude of being the only thinking creature for miles in any direction. The wilds are in their blood. Even in places where they don’t know the specific feature of the terrain, they know the ways of the wild.',
  'They spent years learning the lore of the multiverse. They scored manuscripts, studied scrolls, and listened to the greatest experts on the subjects that interest you. Your efforts have made you a master in your fields of study.',
  'They sailed on a seagoing vessel for years. In that time, they faced down mighty storms, monsters of the deep, and those who wanted to sink their craft to the bottomless depths. Their first love is the distant line of the horizon, but the time has come to try their hand at something new.',
  'War has been their life for as long as they care to remember. They trained as a youth, studied the use of weapons and armor, learned basic survival techniques, including how to stay alive on the battlefield. They might have been part of a standing national army or a mercenary company, or perhaps a member of a local militia who rose to prominence during a recent war.',
  'They grew up on the streets alone, orphaned, and poor. They had no one to watch over them or to provide for them, so they learned to provide for themselves. They fought fiercely over food and kept a constant watch out for other desperate souls who might steal from them. They slept on rooftops and in alleyways, exposed to the elements, and endured sickness without the advantage of medicine or a place to recuperate. They’ve survived despite all odds, and did so through cunning, strength, speed, or some combination of each.'
];

//Generate random character background
document.getElementById('randombackground').addEventListener('click', generaterandombackground);
function generaterandombackground() {
  var randomindex = Math.floor(Math.random() * backgroundarray.length);
  document.getElementById('f').textContent = backgroundarray[randomindex];
  document.getElementById('e').value = randomindex;
  backgroundoptions.push(document.getElementById('e').options[document.getElementById('e').selectedIndex].text);
}

//Chose character background
function showBackground() {
  var selectedItem = document.getElementById('e').value;
  document.getElementById('f').textContent = backgroundarray[selectedItem];
  backgroundoptions.push(document.getElementById('e').options[document.getElementById('e').selectedIndex].text);
}

showBackground();

//Set intial button index to 0
var n = 0;
//Randomly pick one button
document.getElementById('randomalignment').addEventListener('click', generaterandomalignment);
function generaterandomalignment() {
  var buttonel = document.querySelectorAll('.alel');
  var randomindexnumber = Math.floor(Math.random() * 9);
  for (var i = 0; i < buttonel.length; i++) {
    buttonel[i].setAttribute('isAct', '0');
  }
  n = randomindexnumber;
  buttonel[randomindexnumber].setAttribute('isAct', '1');
  alignmentoptions.push(buttonel[n].innerHTML);
}

//Pick one alignment from the 9 options;
function showAlignment(){
  var buttonel = document.querySelectorAll('.alel');
  for (var i = 0; i < buttonel.length; i++) {
    buttonel[i].index = i;
    buttonel[i].setAttribute('isAct', '0');
    buttonel[i].onclick = function () {
      var isAct = this.getAttribute('isAct');
      if (Number(isAct)===1) {
        this.setAttribute('isAct', '0');
      } else {
        buttonel[n].setAttribute('isAct', '0');
        this.setAttribute('isAct', '1');
        n=this.index;
      }
      alignmentoptions.push(buttonel[n].innerHTML);
    };
  }
}

showAlignment();

//Use local storage to save user's selected character information
function savedata() {
  localStorage.setItem('race', JSON.stringify(raceoptions));
  localStorage.setItem('class', JSON.stringify(classoptions));
  localStorage.setItem('background', JSON.stringify(backgroundoptions));
  localStorage.setItem('alignment', JSON.stringify(alignmentoptions));
}

//Generate submit button
document.getElementById('submitbutton').addEventListener('click', handlesubmit);

//Generate confirmation alert to confirm user wishes to proceed with current selections
function handlesubmit(e) {
  e.preventDefault();
  var like = window.confirm('Your Race is: '+ raceoptions[raceoptions.length - 1] +
    ' \n Your Class is: ' + classoptions[classoptions.length - 1] +
    '\n Your Background is: ' + backgroundoptions[backgroundoptions.length - 1] +
    '\n Your Alignment is: ' + alignmentoptions[alignmentoptions.length - 1] +
    '\n Do you like what we chose for you?');

  if (like === true) {
    savedata();
    window.location.href = 'result.html';
  } else {
    location.reload();
    localStorage.clear();
  }
}