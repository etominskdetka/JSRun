var words = [
'макака',
'оладушек',
'программа',
'прекрасный'
];

var word = words[Math.floor(Math.random()*words.length)];
	
var answerArray = [];
for (i = 0; i < word.length; i++) {
	answerArray[i] = '_';
}

var remaningLetters = word.length;

alert(answerArray.join(' ' ));

while (remaningLetters > 0) {
var guess = prompt('Введите букву, или нажмите Отмена для выхода из игры');
if (guess === null) {
	break;
} if else (guess.length !== 1) {
	alert('Введите одну букву');
} else {
 for(var j = 0; j < word.length; j++) {
 	if(word[j] === guess) {
 		answerArray[j] = guess;
 		remainingLetters--;
 	}
 }
}
}


