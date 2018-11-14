
// var result=[];
var raceoptions=[];
var classoptions=[];
var backgroundoptions=[];
var alignmentoptions=[];

var racearray=[
  'Description: Kingdoms rich in ancient grandeur, halls carved into the roots of mountains, the echoing of picks and hammers in deep mines and blazing forges, a commitment to clan and tradition, and a burning hatred of goblins and orcs—these common threads unite all dwarves.',
  'Description: Elves are a magical people of otherworldly grace, living in the world but not entirely part of it. They live in places of ethereal beauty, in the midst of ancient forests or in silvery spires glittering with faerie light, where soft music drifts through the air and gentle fragrances waft on the breeze. Elves love nature and magic, art and artistry, music and poetry, and the good things of the world.',
  'Description: The comforts of home are the goals of most halflings’ lives: a place to settle in peace and quiet, far from marauding monsters and clashing armies; a blazing fire and a generous meal; fine drink and fine conversation. Though some halflings live out their days in remote agricultural communities, others form nomadic bands that travel constantly, lured by the open road and the wide horizon to discover the wonders of new lands and peoples. But even these wanderers love peace, food, hearth, and home, though home might be a wagon jostling along a dirt road or a raft floating downriver.',
  'Description:  In the reckonings of most worlds, humans are the youngest of the common races, late to arrive on the world scene and short-lived in comparison to dwarves, elves, and dragons. Perhaps it is because of their shorter lives that they strive to achieve as much as they can in the years they are given. Or maybe they feel they have something to prove to the elder races, and that’s why they build their mighty empires on the foundation of conquest and trade. Whatever drives them, humans are the innovators, the achievers, and the pioneers of the worlds.',
  'Description: Born of dragons, as their name proclaims, the dragonborn walk proudly through a world that greets them with fearful incomprehension. Shaped by draconic gods or the dragons themselves, dragonborn originally hatched from dragon eggs as a unique race, combining the best attributes of dragons and humanoids. Some dragonborn are faithful servants to true dragons, others form the ranks of soldiers in great wars, and still others find themselves adrift, with no clear calling in life.',
  'Description: A constant hum of busy activity pervades the warrens and neighborhoods where gnomes form their close-knit communities. Louder sounds punctuate the hum: a crunch of grinding gears here, a minor explosion there, a yelp of surprise or triumph, and especially bursts of laughter. Gnomes take delight in life, enjoying every moment of invention, exploration, investigation, creation, and play.',
  'Description: Walking in two worlds but truly belonging to neither, half-elves combine what some say are the best qualities of their elf and human parents: human curiosity, inventiveness, and ambition tempered by the refined senses, love of nature, and artistic tastes of the elves. Some half-elves live among humans, set apart by their emotional and physical differences, watching friends and loved ones age while time barely touches them. Others live with the elves, growing restless as they reach adulthood in the timeless elven realms, while their peers continue to live as children. Many half-elves, unable to fit into either society, choose lives of solitary wandering or join with other misfits and outcasts in the adventuring life.',
  'Description: Whether united under the leadership of a mighty warlock or having fought to a standstill after years of conflict, orc and human tribes sometimes form alliances, joining forces into a larger horde to the terror of civilized lands nearby. When these alliances are sealed by marriages, half-orcs are born. Some half-orcs rise to become proud chiefs of orc tribes, their human blood giving them an edge over their full-blooded orc rivals. Some venture into the world to prove their worth among humans and other more civilized races. Many of these become adventurers, achieving greatness for their mighty deeds and notoriety for their barbaric customs and savage fury.',
  'Description: To be greeted with stares and whispers, to suffer violence and insult on the street, to see mistrust and fear in every eye: this is the lot of the tiefling. And to twist the knife, tieflings know that this is because a pact struck generations ago infused the essence of Asmodeus—overlord of the Nine Hells—into their bloodline. Their appearance and their nature are not their fault but the result of an ancient sin, for which they and their children and their children’s children will always be held accountable.'];
//chose random race

document.getElementById('randomrace').addEventListener('click',generaterandomrace);

function generaterandomrace(e){
 e.preventDefault();
  var randomindex=Math.floor(Math.random()*9);


  document.getElementById('b').value=racearray[randomindex];

  document.getElementById('a').value=randomindex;

  raceoptions.push(document.getElementById('a').options[document.getElementById('a').selectedIndex].text);
}

//chose race
// var racepick;
function showrace(){

  var selectedrace=document.getElementById('a').value;
  document.getElementById('b').value=racearray[selectedrace];
  // return racepick=racearray[selectedrace];
  raceoptions.push(document.getElementById('a').options[document.getElementById('a').selectedIndex].text);
}

showrace();




//chose random class

var classarray=[
  'Description: A fierce warrior of primitive background who can enter a battle rage',
  'Description: An inspiring magician whose power echoes the music of creation',
  'Description: A priestly champion who wields divine magic in service of a higher power',
  'Description: A priest of the Old Faith, wielding the powers of nature - moonlight and plant growth, fire and lightning – and adopting animal forms',
  'Description: A master of martial combat, skilled with a variety of weapons and armor',
  'Description: A master of martial arts, harnessing the power of the body in pursuit of physical and spiritual perfection',
  'Description: A holy warrior bound to a sacred oath',
  'Description: A warrior who uses martial prowess and nature magic to combat threats on the edges of civilization',
  'Description: A scoundrel who uses stealth and trickery to overcome obstacles and enemies',
  'Description: A spellcaster who draws on inherent magic from a gift or bloodline',
  'Description: A wielder of magic that is derived from a bargain with an extraplanar entity',
  'Description: A scholarly magic-user capable of manipulating the structures of reality'

];
document.getElementById('randomclass').addEventListener('click',generaterandomclass);

function generaterandomclass(){

  var randomindex=Math.floor(Math.random()*12);
  document.getElementById('d').value=classarray[randomindex];
  document.getElementById('c').value=randomindex;

  classoptions.push(document.getElementById('c').options[document.getElementById('c').selectedIndex].text);
}

//chose class

function showclass(){

  var selectedclass=document.getElementById('c').value;
  document.getElementById('d').value=classarray[selectedclass];

  classoptions.push(document.getElementById('c').options[document.getElementById('c').selectedIndex].text);

}
showclass();
















//pick one button from 9 options;

var n=0;
var buttonel=document.querySelectorAll('.alel');
for(var i=0;i<buttonel.length;i++){
  buttonel[i].index=i;
  buttonel[i].setAttribute('isAct','0');
  buttonel[i].onclick=function(){
    var isAct=this.getAttribute('isAct');
    if(Number(isAct)){
      this.setAttribute('isAct','0');
    }
    else{

      buttonel[n].setAttribute('isAct','0');
      
      this.setAttribute('isAct','1');
      n=this.index;
    }
    alignmentoptions.push(buttonel[n].innerHTML);
  };



}



//randomly pick one button
document.getElementById('randomalignment').addEventListener('click',generaterandomalignment);

function generaterandomalignment(e){
  e.preventDefault();

  var buttonel=document.querySelectorAll('.alel');

  var randomindexnumber=Math.floor(Math.random()*9);
  for(var i=0;i<buttonel.length;i++){

    buttonel[i].setAttribute('isAct','0');
  }

  n=randomindexnumber;
  buttonel[randomindexnumber].setAttribute('isAct','1');
  alignmentoptions.push(buttonel[n].innerHTML);
}






//try to use local storage to save data user pick


function savedata(){

  localStorage.setItem('race',JSON.stringify(raceoptions));
  localStorage.setItem('class',JSON.stringify(classoptions));
  localStorage.setItem('background',JSON.stringify(backgroundoptions));
  localStorage.setItem('alignment',JSON.stringify(alignmentoptions));
}





//submit button

document.getElementById('submitbutton').addEventListener('click',handlesubmit);

function handlesubmit(e){

  e.preventDefault();


  // alert('You chose Race: ' + raceoptions[raceoptions.length-1] + ' \n You chose class: '+ classoptions[classoptions.length-1]);

  var like=window.confirm('Your Race is : ' + raceoptions[raceoptions.length-1] +
  ' \n Your Class is : '+ classoptions[classoptions.length-1]+
  '\n Your Background is :' + backgroundoptions[backgroundoptions.length-1]+
  '\n Your Alignment is :'+ alignmentoptions[alignmentoptions.length-1]+
  '\nDo you like what we chose for you?');
  if(like===true)
  { 
    savedata();
    window.location.href='result.html';}
  else{

    // document.write('ok no worries!');
    location.reload();
    localStorage.clear();
  }

}

