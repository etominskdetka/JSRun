var subjects = ['нос', 'рот', 'лоб', 'глаз'];
var adjects = ['кривой', 'злой', 'красный'];
var words = ['ёж', 'ящер', 'столб', 'гриб'];
var additions = ['жопы', 'задницы', 'хера'];

var randomSubject = subjects[Math.floor(Math.random() * subjects.length)];

var randomAdject = adjects[Math.floor(Math.random() * adjects.length)];

var randomWords = words[Math.floor(Math.random() * words.length)];

var randomAddition = additions[Math.floor(Math.random() * additions.length)];

var randomPhrase = 'У тебя ' + randomSubject + ' как ' + randomAdject + ' ' + randomWords + 'у' + randomAddition;

//alert(randomPhrase);

var randomPhrase2 = ['У тебя', randomSubject, 'словно', randomAdject, randomWords, 'у', randomAddition].join(' ');

alert(randomPhrase2);

var numbers = [3,2,1];

alert ([3, 'больше, чем', 2, 'больше, чем', 1].join(' '));
