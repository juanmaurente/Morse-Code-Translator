const enInput = document.querySelector('#en_input');
const enButton = document.querySelector('#en_button');
const enResult = document.querySelector('#en_result');
const morseInput = document.querySelector('#mor_input');
const morseButton = document.querySelector('#mor_button');
const morseResult = document.querySelector('#mor_result');

const alphabetToMorse = {
	A: '.-',
	B: '-...',
	C: '-.-.',
	D: '-..',
	E: '.',
	F: '..-.',
	G: '--.',
	H: '....',
	I: '..',
	J: '.---',
	K: '-.-',
	L: '.-..',
	M: '--',
	N: '-.',
	O: '---',
	P: '.--.',
	Q: '--.-',
	R: '.-.',
	S: '...',
	T: '-',
	U: '..-',
	V: '...-',
	W: '.--',
	X: '-..-',
	Y: '-.--',
	Z: '--..',
	' ': ' ',
};

enButton.addEventListener('click', () => {
	let engText = enInput.value;
	engText.toUpperCase;
	translateToMorse(engText);
});

const translateToMorse = (str) => {
	const alphaArray = Object.entries(alphabetToMorse);
	const result = [];
	console.log(alphaArray);
	[...str].map((char) => {
		result.push(Object.values(alphabetToMorse[char]).join(''));
		return;
	});
	enResult.innerText = result.join('   ');
};
