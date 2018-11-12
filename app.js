



var racearray=['ta','tb','tx','td','te','tf','tyyy','trrrr','grw4gw'];
//chose random race

document.getElementById('randomrace').addEventListener('click',generaterandomrace);

function generaterandomrace(){

  var randomindex=Math.floor(Math.random()*9);


  document.getElementById('b').value=racearray[randomindex];

  document.getElementById('a').value=randomindex;
}

//chose race

function showrace(){

  var selectedrace=document.getElementById('a').value;
  document.getElementById('b').value=racearray[selectedrace];


}
showrace();





//chose random class

var classarray=['1','a','3','5','ff','ffsf','er','g','ty','jh','j','rhfn'];
document.getElementById('randomclass').addEventListener('click',generaterandomclass);

function generaterandomclass(){

  var randomindex=Math.floor(Math.random()*12);
  document.getElementById('d').value=classarray[randomindex];
 document.getElementById('c').value=randomindex;

}


//chose class


function showclass(){

  var selectedrace=document.getElementById('c').value;
  document.getElementById('d').value=racearray[selectedrace];


}
showclass();