
// var result=[];
var raceoptions=[];
var classoptions=[];

var racearray=['ta','tb','tx','td','te','tf','tyyy','trrrr','grw4gw'];
//chose random race

document.getElementById('randomrace').addEventListener('click',generaterandomrace);

function generaterandomrace(){

  var randomindex=Math.floor(Math.random()*9);


  document.getElementById('b').value=racearray[randomindex];

  document.getElementById('a').value=randomindex;

  raceoptions.push(racearray[randomindex]);
}

//chose race
// var racepick;
function showrace(){

  var selectedrace=document.getElementById('a').value;
  document.getElementById('b').value=racearray[selectedrace];
  // return racepick=racearray[selectedrace];
  raceoptions.push(racearray[selectedrace]);
}

showrace();




//chose random class

var classarray=['1','a','3','5','ff','ffsf','er','g','ty','jh','j','rhfn'];
document.getElementById('randomclass').addEventListener('click',generaterandomclass);

function generaterandomclass(){

  var randomindex=Math.floor(Math.random()*12);
  document.getElementById('d').value=classarray[randomindex];
  document.getElementById('c').value=randomindex;

  classoptions.push(classarray[randomindex]);
}

//chose class

function showclass(){

  var selectedclass=document.getElementById('c').value;
  document.getElementById('d').value=classarray[selectedclass];

  classoptions.push(classarray[selectedclass]);

}
showclass();








//randomly pick one button
document.getElementById('randomalignment').addEventListener('click',generaterandomalignment);

function generaterandomalignment(){

  var buttonel=document.querySelectorAll('.alel');

  var randomindexnumber=Math.floor(Math.random()*9);
  for(var i=0;i<buttonel.length;i++){

    buttonel[i].setAttribute('isAct','0');
  }

  buttonel[randomindexnumber].setAttribute('isAct','1');
}





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
  };



}




//submit button

document.getElementById('submitbutton').addEventListener('click',handlesubmit);

function handlesubmit(e){

  e.preventDefault();


  alert('You chose Race: ' + raceoptions[raceoptions.length-1] + 'You chose class: '+ classoptions[classoptions.length-1]);


}
