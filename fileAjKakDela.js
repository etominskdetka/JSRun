'эЙ, кАК ДеЛА?';
var stringTask = 'эЙ, кАК ДЕла?';

var stringLower = stringTask.toLowerCase();

var firstWord = stringTask[0];

var firstWordUpper = firstWord.toUpperCase();

var secondHalf = stringLower.slice(1);

var totalString = firstWordUpper + secondHalf;

alert(totalString);

alert(stringTask[0].toUpperCase() + stringTask.slice(1).toLowerCase());


