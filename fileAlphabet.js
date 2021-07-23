var alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
var randomNumberOfWord = Math.floor(Math.random() * alphabet.length);
var randomWord = alphabet[randomNumberOfWord];
var randomString = '';
while (randomString.length < 7) {
	randomString += randomWord;
}
console.log(randomString);
