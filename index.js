const enInput = document.querySelector('#en_input');
const enButton = document.querySelector('#en_button');
const enResult = document.querySelector('#en_result');
const morseInput = document.querySelector('#mor_input');
const morseButton = document.querySelector('#mor_button');
const morseResult = document.querySelector('#mor_result');
const clearBtn = document.querySelectorAll('.container__button--clear');

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
	' ': '|',
};

clearBtn.forEach((btn) =>
	btn.addEventListener('click', () => {
		enInput.value = '';
		enResult.innerText = '';
		morseInput.value = '';
		morseResult.innerText = '';
	}),
);

enButton.addEventListener('click', () => {
	let engText = enInput.value;
	engText.toUpperCase;
	translateToMorse(engText);
});

morseButton.addEventListener('click', () => {
	let morseCode = morseInput.value;
	morseCode.split(' ');
	translateToEng(morseCode);
});

export const translateToMorse = (str) => {
	const result = [];
	[...str].map((char) => {
		result.push(Object.values(alphabetToMorse[char]).join(''));
	});
	enResult.innerText = result.join(' ');
};

const morseToAlphabet = Object.keys(alphabetToMorse).reduce(
	(obj, key) => Object.assign({}, obj, { [alphabetToMorse[key]]: key }),
	{},
);

export const translateToEng = (morseCode) => {
	const result = [];
	morseCode.split(' ').map((char) => {
		result.push(Object.values(morseToAlphabet[char]));
	});
	morseResult.innerText = result.join('');
};
