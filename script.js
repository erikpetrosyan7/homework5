// 1

let sentence =
	'Which would be worse to live as a monster or to die as a good man?';

function findLongestWord(str) {
	let copy = str.split(' ');
	let eachWord = '';
	for (let value of copy) {
		if (value.length > eachWord.length) {
			eachWord = value;
		}
	}
	return eachWord;
}
findLongestWord(sentence);

// 2

// 3
function charToNextTwoChars(str) {
	let result = '';

	for (let i = 0; i < str.length; i += 3) {
		if (i + 2 < str.length) {
			result += str[i + 1] + str[i + 2] + str[i];
		}
	}
	return result;
}
charToNextTwoChars('dfgjkloypl');
