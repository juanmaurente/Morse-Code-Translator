import { translateToMorse, translateToEng } from './index.js';

const incorrectInput = new Error(
	'Input is not valid. Should be ONLY CAPITAL LETTERS',
);
const noArgument = new Error('No word has been entered');

describe('Test case for a function that translate English vocabulary to Morse Code', () => {
	it('Should return the correct Morse Code for each character using | char as separator ', () => {
		expect(translateToMorse('E')).toBe('.');
		expect(translateToMorse('HELLO WORLD')).toBe('.... . .-.. .-.. ---');
		expect(translateToMorse('YOU SAY GOODBYE AND I SAY HELLO')).toBe(
			'-.-- --- ..- | ... .- -.-- | --. --- --- -.. -... -.-- . | .- -. -.. | .. | ... .- -.-- | .... . .-.. .-.. ---',
		);
		expect(translateToMorse('JUAN MAURENTE')).toBe(
			'.--- ..- .- -. | -- .- ..- .-. . -. - .',
		);
	});

	it('should throw an error if there is other input than a capital letter', () => {
		expect(() => translateToMorse('hello')).toThrowError(incorrectInput);
		expect(() => translateToMorse(1)).toThrowError(incorrectInput);
	});
	it('should throw an error if there is no argument', () => {
		expect(() => translateToMorse(undefined)).toThrowError(noArgument);
	});
});

describe('Test case for a function that translate Morse Code to English vocabulary', () => {
	it('Should return the correct Morse Code for each character using | char as separator ', () => {
		expect(translateToEng('.')).toBe('E');
		expect(translateToMorse('.... . .-.. .-.. ---')).toBe('HELLO WORLD');
		expect(
			translateToMorse(
				'-.-- --- ..- | ... .- -.-- | --. --- --- -.. -... -.-- . | .- -. -.. | .. | ... .- -.-- | .... . .-.. .-.. ---',
			),
		).toBe('YOU SAY GOODBYE AND I SAY HELLO');
		expect(
			translateToMorse('.--- ..- .- -. | -- .- ..- .-. . -. - .'),
		).toBe('JUAN MAURENTE');
	});

	it('should throw an error if there is other input than a "." "-" or "|" ', () => {
		expect(() => translateToMorse('hello')).toThrowError(incorrectInput);
		expect(() => translateToMorse('HELLO')).toThrowError(incorrectInput);
		expect(() => translateToMorse(1)).toThrowError(incorrectInput);
		expect(() => translateToMorse('@')).toThrowError(incorrectInput);
	});
	it('should throw an error if there is no argument', () => {
		expect(() => translateToMorse(undefined)).toThrowError(noArgument);
	});
});
