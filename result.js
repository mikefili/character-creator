




  var raceel = JSON.parse(localStorage.getItem('race'));
  var classel=JSON.parse(localStorage.getItem('class'));


  //for background
//   var backgroundel=JSON.parse(localStorage.getItem('background'));

  var alignmentel=JSON.parse(localStorage.getItem('alignment'));



//   console.log(raceel);

var mainel=document.getElementById('main-content');

var pel=document.createElement('p');
   pel.textContent='Your race is :' + raceel[raceel.length-1];
 mainel.append(pel);


var cel=document.createElement('p');
    cel.textContent='Your Class is :' + classel[classel.length-1];
    mainel.append(cel);



// var bel=document.createElement('p');

//     bel.textContent='Your Background is: ' + backgroundel[backgroundel.length-1];
//     mainel.appendChild(bel);

    var ael=document.createElement('p');
    ael.textContent='Your alignment is :' + alignmentel[alignmentel.length-1];
    mainel.append(ael);