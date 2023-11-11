import { describe, expect, test } from 'vitest';
import { Util } from './Util';

const testData = {
	hexStr:
		'49276d206b696c6c696e6720796f757220627261696e206c696b65206120706f69736f6e6f7573206d757368726f6f6d',
	str: "I'm killing your brain like a poisonous mushroom",
	bytes: new Uint8Array([
		73, 39, 109, 32, 107, 105, 108, 108, 105, 110, 103, 32, 121, 111, 117, 114, 32, 98, 114, 97,
		105, 110, 32, 108, 105, 107, 101, 32, 97, 32, 112, 111, 105, 115, 111, 110, 111, 117, 115, 32,
		109, 117, 115, 104, 114, 111, 111, 109
	])
};

describe('Util.ts', () => {
	test('strToHexStr', () => {
		expect(Util.strToHexStr(testData.str)).toStrictEqual(testData.hexStr);
	});

	test('hexStrToByteArray', () => {
		expect(Util.hexStrToByteArray(testData.hexStr)).toStrictEqual(testData.bytes);
	});

	test('byteArrayToString', () => {
		expect(Util.byteArrayToString(testData.bytes)).toStrictEqual(testData.str);
	});

	test('byteArrayToHexStr', () => {
		expect(Util.byteArrayToHexStr(testData.bytes)).toStrictEqual(testData.hexStr);
	});
});
