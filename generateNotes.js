

var timeInterval = 0;
var timer = null;
var head = ['E', 'B', 'G', 'D', 'A', 'E2'];

var practiceRun = function() {
	if (timeInterval > 0) {
		timer = setInterval(randomNote, timeInterval);
	}
	else if (timeInterval < 0) {
		clearInterval(timer);
	}
}

var changeTimer = function(num) {
	clearInterval(timer);
	timeInterval = num;
	practiceRun();
}

var randomNote = function() {
	let index = Math.floor(Math.random() * 6);				// return a random int from 0-5
	let nextNote = Math.floor(Math.random() * 12) + 1;		// returns a random integer from 1-12
	let curr = '';
	for (let i=0; i<6; i++) {
		if (i == index) {
			curr = nextNote;
		}
		else {
			curr = '';
		}
		text = curr.toString().padStart(3, ' ').padEnd(9, ' -') + ' ' + head[i];
		document.getElementById("line" + i).innerHTML = text;

	}

}

