var randomBodyParts = ['нос', 'череп', 'глаз'];
var randomAdjectives = ['вонючая', 'унылая', 'дурацкая'];
var randomWords = ['муха', 'выдра', 'дубина', 'мартышка', 'крыса'];

//Выбор части тела
var changeBodyParts = randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];

//Выбор прилагательного
var changeAdjectives = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];

// Выбор дополнительного слова
var changeWords = randomWords[Math.floor(Math.random() * randomWords.length)];
	
var randomPhrase = 'У тебя ' + changeBodyParts + ' как ' + changeAdjectives + ' ' + changeWords;

//alert(randomPhrase);

var randomInsult = ['У тебя', changeBodyParts, 'словно', changeAdjectives, changeWords].join(' ');

alert(randomInsult);

	
