var input = 'javascript is awesome';
var output = '';
for (i = 0; i < input.length; i++) {
	if (input[i] === 'a') {
		output+='4';
	} else if (input[i] === 'i') {
		output+='1';
	} else if (input[i] === 'e') {
		output+='3';
	} else {
		output+=input[i];
	}
}
console.log(output);