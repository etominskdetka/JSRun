var alphabet = 'абвгдеёжзийклмнопрстуфхцчшщьыъэюя';
var randomString = '';
while (randomString.length < 7) {
	randomString +=alphabet[Math.floor(Math.random()*alphabet.length)];
}
console.log(randomString);
