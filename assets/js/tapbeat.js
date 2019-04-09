alert("press any keys from A-Z to begin the FUN!!!!\n press space bar to change sounds");
var count=1;
var keys=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
for(var i=0;i<26;i++){
  keys[i]=new Audio();
}
keys[0].src="assets/kiosk/A/bubbles.mp3";
		keys[1].src="assets/kiosk/A/clay.mp3";
		keys[2].src="assets/kiosk/A/confetti.mp3";
		keys[3].src="assets/kiosk/A/corona.mp3";
		keys[4].src="assets/kiosk/A/dotted-spiral.mp3";
		keys[5].src="assets/kiosk/A/flash-1.mp3";
		keys[6].src="assets/kiosk/A/flash-2.mp3";
		keys[7].src="assets/kiosk/A/flash-3.mp3";
		keys[8].src="assets/kiosk/A/glimmer.mp3";
		keys[9].src="assets/kiosk/A/moon.mp3";
		keys[10].src="assets/kiosk/A/pinwheel.mp3";
		keys[11].src="assets/kiosk/A/piston-1.mp3";
		keys[12].src="assets/kiosk/A/piston-2.mp3";
		keys[13].src="assets/kiosk/A/piston-3.mp3";
		keys[14].src="assets/kiosk/A/prism-1.mp3";
		keys[15].src="assets/kiosk/A/prism-2.mp3";
		keys[16].src="assets/kiosk/A/prism-3.mp3";
		keys[17].src="assets/kiosk/A/splits.mp3";
		keys[18].src="assets/kiosk/A/squiggle.mp3";
		keys[19].src="assets/kiosk/A/strike.mp3";
		keys[20].src="assets/kiosk/A/suspension.mp3";
		keys[21].src="assets/kiosk/A/timer.mp3";
		keys[22].src="assets/kiosk/A/ufo.mp3";
		keys[23].src="assets/kiosk/A/veil.mp3";
		keys[24].src="assets/kiosk/A/wipe.mp3";
		keys[25].src="assets/kiosk/A/zig-zag.mp3";
$("body").keypress(function(event){
	if(event.which===32){
		count++;
		if(count===1){

			this.style.backgroundColor="black";
		keys[0].src="assets/kiosk/A/bubbles.mp3";
		keys[1].src="assets/kiosk/A/clay.mp3";
		keys[2].src="assets/kiosk/A/confetti.mp3";
		keys[3].src="assets/kiosk/A/corona.mp3";
		keys[4].src="assets/kiosk/A/dotted-spiral.mp3";
		keys[5].src="assets/kiosk/A/flash-1.mp3";
		keys[6].src="assets/kiosk/A/flash-2.mp3";
		keys[7].src="assets/kiosk/A/flash-3.mp3";
		keys[8].src="assets/kiosk/A/glimmer.mp3";
		keys[9].src="assets/kiosk/A/moon.mp3";
		keys[10].src="assets/kiosk/A/pinwheel.mp3";
		keys[11].src="assets/kiosk/A/piston-1.mp3";
		keys[12].src="assets/kiosk/A/piston-2.mp3";
		keys[13].src="assets/kiosk/A/piston-3.mp3";
		keys[14].src="assets/kiosk/A/prism-1.mp3";
		keys[15].src="assets/kiosk/A/prism-2.mp3";
		keys[16].src="assets/kiosk/A/prism-3.mp3";
		keys[17].src="assets/kiosk/A/splits.mp3";
		keys[18].src="assets/kiosk/A/squiggle.mp3";
		keys[19].src="assets/kiosk/A/strike.mp3";
		keys[20].src="assets/kiosk/A/suspension.mp3";
		keys[21].src="assets/kiosk/A/timer.mp3";
		keys[22].src="assets/kiosk/A/ufo.mp3";
		keys[23].src="assets/kiosk/A/veil.mp3";
		keys[24].src="assets/kiosk/A/wipe.mp3";
		keys[25].src="assets/kiosk/A/zig-zag.mp3";

		}
		else if(count===2){
			this.style.backgroundColor="rgb(198,187,187)";
		keys[0].src="assets/kiosk/B/bubbles.mp3";
		keys[1].src="assets/kiosk/B/clay.mp3";
		keys[2].src="assets/kiosk/B/confetti.mp3";
		keys[3].src="assets/kiosk/B/corona.mp3";
		keys[4].src="assets/kiosk/B/dotted-spiral.mp3";
		keys[5].src="assets/kiosk/B/flash-1.mp3";
		keys[6].src="assets/kiosk/B/flash-2.mp3";
		keys[7].src="assets/kiosk/B/flash-3.mp3";
		keys[8].src="assets/kiosk/B/glimmer.mp3";
		keys[9].src="assets/kiosk/B/moon.mp3";
		keys[10].src="assets/kiosk/B/pinwheel.mp3";
		keys[11].src="assets/kiosk/B/piston-1.mp3";
		keys[12].src="assets/kiosk/B/piston-2.mp3";
		keys[13].src="assets/kiosk/B/piston-3.mp3";
		keys[14].src="assets/kiosk/B/prism-1.mp3";
		keys[15].src="assets/kiosk/B/prism-2.mp3";
		keys[16].src="assets/kiosk/B/prism-3.mp3";
		keys[17].src="assets/kiosk/B/splits.mp3";
		keys[18].src="assets/kiosk/B/squiggle.mp3";
		keys[19].src="assets/kiosk/B/strike.mp3";
		keys[20].src="assets/kiosk/B/suspension.mp3";
		keys[21].src="assets/kiosk/B/timer.mp3";
		keys[22].src="assets/kiosk/B/ufo.mp3";
		keys[23].src="assets/kiosk/B/veil.mp3";
		keys[24].src="assets/kiosk/B/wipe.mp3";
		keys[25].src="assets/kiosk/B/zig-zag.mp3";

		}
		else if(count===3){
			this.style.backgroundColor="rgb(150,201,154)";
		keys[0].src="assets/kiosk/C/bubbles.mp3";
		keys[1].src="assets/kiosk/C/clay.mp3";
		keys[2].src="assets/kiosk/C/confetti.mp3";
		keys[3].src="assets/kiosk/C/corona.mp3";
		keys[4].src="assets/kiosk/C/dotted-spiral.mp3";
		keys[5].src="assets/kiosk/C/flash-1.mp3";
		keys[6].src="assets/kiosk/C/flash-2.mp3";
		keys[7].src="assets/kiosk/C/flash-3.mp3";
		keys[8].src="assets/kiosk/C/glimmer.mp3";
		keys[9].src="assets/kiosk/C/moon.mp3";
		keys[10].src="assets/kiosk/C/pinwheel.mp3";
		keys[11].src="assets/kiosk/C/piston-1.mp3";
		keys[12].src="assets/kiosk/C/piston-2.mp3";
		keys[13].src="assets/kiosk/C/piston-3.mp3";
		keys[14].src="assets/kiosk/C/prism-1.mp3";
		keys[15].src="assets/kiosk/C/prism-2.mp3";
		keys[16].src="assets/kiosk/C/prism-3.mp3";
		keys[17].src="assets/kiosk/C/splits.mp3";
		keys[18].src="assets/kiosk/C/squiggle.mp3";
		keys[19].src="assets/kiosk/C/strike.mp3";
		keys[20].src="assets/kiosk/C/suspension.mp3";
		keys[21].src="assets/kiosk/C/timer.mp3";
		keys[22].src="assets/kiosk/C/ufo.mp3";
		keys[23].src="assets/kiosk/C/veil.mp3";
		keys[24].src="assets/kiosk/C/wipe.mp3";
		keys[25].src="assets/kiosk/C/zig-zag.mp3";

		}
		else if(count===4){
			this.style.backgroundColor="rgb(255,153,153)";
		keys[0].src="assets/kiosk/D/bubbles.mp3";
		keys[1].src="assets/kiosk/D/clay.mp3";
		keys[2].src="assets/kiosk/D/confetti.mp3";
		keys[3].src="assets/kiosk/D/corona.mp3";
		keys[4].src="assets/kiosk/D/dotted-spiral.mp3";
		keys[5].src="assets/kiosk/D/flash-1.mp3";
		keys[6].src="assets/kiosk/D/flash-2.mp3";
		keys[7].src="assets/kiosk/D/flash-3.mp3";
		keys[8].src="assets/kiosk/D/glimmer.mp3";
		keys[9].src="assets/kiosk/D/moon.mp3";
		keys[10].src="assets/kiosk/D/pinwheel.mp3";
		keys[11].src="assets/kiosk/D/piston-1.mp3";
		keys[12].src="assets/kiosk/D/piston-2.mp3";
		keys[13].src="assets/kiosk/D/piston-3.mp3";
		keys[14].src="assets/kiosk/D/prism-1.mp3";
		keys[15].src="assets/kiosk/D/prism-2.mp3";
		keys[16].src="assets/kiosk/D/prism-3.mp3";
		keys[17].src="assets/kiosk/D/splits.mp3";
		keys[18].src="assets/kiosk/D/squiggle.mp3";
		keys[19].src="assets/kiosk/D/strike.mp3";
		keys[20].src="assets/kiosk/D/suspension.mp3";
		keys[21].src="assets/kiosk/D/timer.mp3";
		keys[22].src="assets/kiosk/D/ufo.mp3";
		keys[23].src="assets/kiosk/D/veil.mp3";
		keys[24].src="assets/kiosk/D/wipe.mp3";
		keys[25].src="assets/kiosk/D/zig-zag.mp3";

		}
		else if(count===5){
			this.style.backgroundColor="rgb(255,255,204)";
		keys[0].src="assets/kiosk/E/bubbles.mp3";
		keys[1].src="assets/kiosk/E/clay.mp3";
		keys[2].src="assets/kiosk/E/confetti.mp3";
		keys[3].src="assets/kiosk/E/corona.mp3";
		keys[4].src="assets/kiosk/E/dotted-spiral.mp3";
		keys[5].src="assets/kiosk/E/flash-1.mp3";
		keys[6].src="assets/kiosk/E/flash-2.mp3";
		keys[7].src="assets/kiosk/E/flash-3.mp3";
		keys[8].src="assets/kiosk/E/glimmer.mp3";
		keys[9].src="assets/kiosk/E/moon.mp3";
		keys[10].src="assets/kiosk/E/pinwheel.mp3";
		keys[11].src="assets/kiosk/E/piston-1.mp3";
		keys[12].src="assets/kiosk/E/piston-2.mp3";
		keys[13].src="assets/kiosk/E/piston-3.mp3";
		keys[14].src="assets/kiosk/E/prism-1.mp3";
		keys[15].src="assets/kiosk/E/prism-2.mp3";
		keys[16].src="assets/kiosk/E/prism-3.mp3";
		keys[17].src="assets/kiosk/E/splits.mp3";
		keys[18].src="assets/kiosk/E/squiggle.mp3";
		keys[19].src="assets/kiosk/E/strike.mp3";
		keys[20].src="assets/kiosk/E/suspension.mp3";
		keys[21].src="assets/kiosk/E/timer.mp3";
		keys[22].src="assets/kiosk/E/ufo.mp3";
		keys[23].src="assets/kiosk/E/veil.mp3";
		keys[24].src="assets/kiosk/E/wipe.mp3";
		keys[25].src="assets/kiosk/E/zig-zag.mp3";

		}
		else if(count===6){
			count=0;
			this.style.backgroundColor="rgb(229,204,255)";
		keys[0].src="assets/kiosk/F/bubbles.mp3";
		keys[1].src="assets/kiosk/F/clay.mp3";
		keys[2].src="assets/kiosk/F/confetti.mp3";
		keys[3].src="assets/kiosk/F/corona.mp3";
		keys[4].src="assets/kiosk/F/dotted-spiral.mp3";
		keys[5].src="assets/kiosk/F/flash-1.mp3";
		keys[6].src="assets/kiosk/F/flash-2.mp3";
		keys[7].src="assets/kiosk/F/flash-3.mp3";
		keys[8].src="assets/kiosk/F/glimmer.mp3";
		keys[9].src="assets/kiosk/F/moon.mp3";
		keys[10].src="assets/kiosk/F/pinwheel.mp3";
		keys[11].src="assets/kiosk/F/piston-1.mp3";
		keys[12].src="assets/kiosk/F/piston-2.mp3";
		keys[13].src="assets/kiosk/F/piston-3.mp3";
		keys[14].src="assets/kiosk/F/prism-1.mp3";
		keys[15].src="assets/kiosk/F/prism-2.mp3";
		keys[16].src="assets/kiosk/F/prism-3.mp3";
		keys[17].src="assets/kiosk/F/splits.mp3";
		keys[18].src="assets/kiosk/F/squiggle.mp3";
		keys[19].src="assets/kiosk/F/strike.mp3";
		keys[20].src="assets/kiosk/F/suspension.mp3";
		keys[21].src="assets/kiosk/F/timer.mp3";
		keys[22].src="assets/kiosk/F/ufo.mp3";
		keys[23].src="assets/kiosk/F/veil.mp3";
		keys[24].src="assets/kiosk/F/wipe.mp3";
		keys[25].src="assets/kiosk/F/zig-zag.mp3";

		}
	}
});


var i = 20;
var r=40;
var d=30;
var color="rgb(" + getRandom() +", "+ getRandom() +", " + getRandom() +")";
var colorf="rgb(" + getRandom() +", "+ getRandom() +", " + getRandom() +")";
$("body").keypress(function(event){
  for(var j=0;j<26;j++){
    if(event.which===(j+97)){
    i = 20;
    getRandomR();
    getRandomD();
    getColor1();
    getColor2();
    keys[j].load();
    keys[j].play();
    $("div").css("background",color);
        myLoop();
    }
  }
	// if(event.which===97){
	// 	i = 20;
	// 	getRandomR();
	// 	getRandomD();
	// 	getColor1();
	// 	getColor2();
 //    keys[0].load();
 //    keys[0].play();
	// 	$("div").css("background",color);
 //        myLoop();
 //    }


	});

function myLoop () {
   setTimeout(function () {   
      $("div").css("clip-path","circle( "+ i +"rem at "+ r +"rem "+ d +"rem)");							
      i=i-0.25;                     
      if (i >= 0){
      	if(i<7){

      		$("div").css("background",colorf);

         }
      	myLoop();
     }
   }, 10);
}

//get random distance on right
function getRandomR(){
  r=Math.floor(Math.random()*69);
}
//get distance on left
function getRandomD(){
  d=Math.floor(Math.random()*31);
}

function getColor1(){
   color="rgb(" + getRandom() +", "+ getRandom() +", " + getRandom() +")";
}
function getColor2(){
   colorf="rgb(" + getRandom() +", "+ getRandom() +", " + getRandom() +")";
}


function getRandom(){
  return Math.floor(Math.random()*256);
}


