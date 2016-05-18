// an array of 5 intergers used to kill zombies.
var bulletQueueValues = new Array(5);
// the currentBullet being used in zombie mode.
var currentBullet = 1;
//	the currentBullet being used in easter egg mode.
var easterEggThisWave = 1; 

/*
	generates a random bullet queue of integers between -5 and 5 which will be 
	displayed on bullets at the top of the screen.
 */
function generateQueueFirst(){
	for(i = 0; i < 5; i++){
		bulletQueueValues[i] = Math.floor((Math.random() *11) + 5 );  
		document.getElementById("insideQueue" + i).innerHTML = bulletQueueValues[i];
	}
	currentBullet = bulletQueueValues[0];

}

/*
	generates a random bullet queue of integers between -5 and 5 which will be 
	displayed on bullets at the top of the screen.
 */
function generateQueueSecond(){
	for(i = 0; i < 5; i++){
		bulletQueueValues[i] = Math.floor((Math.random() *21) + 10);  
		document.getElementById("insideQueue" + i).innerHTML = bulletQueueValues[i];
	}
	currentBullet = bulletQueueValues[0];

}

/*
	generates a random bullet queue of integers between -5 and 5 which will be 
	displayed on bullets at the top of the screen.
 */
function generateQueueFinal(){
	for(i = 0; i < 5; i++){
		bulletQueueValues[i] = Math.floor((Math.random() *31) + 10);  
		document.getElementById("insideQueue" + i).innerHTML = bulletQueueValues[i];
	}
	currentBullet = bulletQueueValues[0];

}
/*
	using shift and push addRandomBullet inserts a new random integer to the back end 
	of the queue effectively creating a never ending stream of random integers between 
	-5 and 5.
 */
function updateRandomBullet(){
	var length = bulletQueueValues.length;
	var x = Math.floor((Math.random() * 11) + 5);
	bulletQueueValues.shift();
	bulletQueueValues.push(x);
	for(i = 0; i < length; i++){
		document.getElementById("insideQueue" + i).innerHTML = bulletQueueValues[i];
	}
	currentBullet = bulletQueueValues[0];
}
/*
	using shift and push addRandomBullet inserts a new random integer to the back end 
	of the queue effectively creating a never ending stream of random integers between 
	-5 and 5.
 */
function updateRandomBulletSecond(){
	var length = bulletQueueValues.length;
	var x = Math.floor((Math.random() * 21) + 10);
	bulletQueueValues.shift();
	bulletQueueValues.push(x);
	for(i = 0; i < length; i++){
		document.getElementById("insideQueue" + i).innerHTML = bulletQueueValues[i];
	}
	currentBullet = bulletQueueValues[0];
}
/*
	using shift and push addRandomBullet inserts a new random integer to the back end 
	of the queue effectively creating a never ending stream of random integers between 
	-5 and 5.
 */
function updateRandomBulletFinal(){
	var length = bulletQueueValues.length;
	var x = Math.floor((Math.random() * 31) + 20);
	bulletQueueValues.shift();
	bulletQueueValues.push(x);
	for(i = 0; i < length; i++){
		document.getElementById("insideQueue" + i).innerHTML = bulletQueueValues[i];
	}
	currentBullet = bulletQueueValues[0];
}
/*
	when the page loads all the necessary functions to generate a fully functional
	bullet queue.
 */
$(document).ready(function() {
	var queue = document.getElementById('queue0');

	if(wave == 1) {
		//alert(wave);
		generateQueueFirst();
		currentBullet = bulletQueueValues[0];
		queue.onclick = function() {
			updateRandomBullet();
		}
	}
	if(wave == 2) {
		alert(wave);
		generateQueueSecond();
		currentBullet = bulletQueueValues[0];
		queue.onclick = function() {
			updateRandomBulletSecond();
		}
	}
	if(wave == 3) {
		alert(wave);
		generateQueueFinal();
		currentBullet = bulletQueueValues[0];
		queue.onclick = function() {
			updateRandomBulletFinal();
		}
	}

});