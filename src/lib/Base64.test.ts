import { describe, expect, test } from 'vitest';
import { Base64 } from './Base64';

const test_data = {
	no_padding: {
		inArr: new Uint8Array([
			73, 39, 109, 32, 107, 105, 108, 108, 105, 110, 103, 32, 121, 111, 117, 114, 32, 98, 114, 97,
			105, 110, 32, 108, 105, 107, 101, 32, 97, 32, 112, 111, 105, 115, 111, 110, 111, 117, 115, 32,
			109, 117, 115, 104, 114, 111, 111, 109
		]),
		outArr: new Uint8Array([
			83, 83, 100, 116, 73, 71, 116, 112, 98, 71, 120, 112, 98, 109, 99, 103, 101, 87, 57, 49, 99,
			105, 66, 105, 99, 109, 70, 112, 98, 105, 66, 115, 97, 87, 116, 108, 73, 71, 69, 103, 99, 71,
			57, 112, 99, 50, 57, 117, 98, 51, 86, 122, 73, 71, 49, 49, 99, 50, 104, 121, 98, 50, 57, 116
		])
	},
	pad_1: {
		ltThree: {
			inArr: new Uint8Array([77, 97]),
			outArr: new Uint8Array([84, 87, 69, 61])
		},
		gtThree: {
			inArr: new Uint8Array([108, 105, 103, 104, 116, 32, 119, 111, 114, 107, 46]),
			outArr: new Uint8Array([98, 71, 108, 110, 97, 72, 81, 103, 100, 50, 57, 121, 97, 121, 52, 61])
		}
	},
	pad_2: {
		ltThree: {
			inArr: new Uint8Array([77]),
			outArr: new Uint8Array([84, 81, 61, 61])
		},
		gtThree: {
			inArr: new Uint8Array([108, 105, 103, 104, 116, 32, 119, 111, 114, 107]),
			outArr: new Uint8Array([98, 71, 108, 110, 97, 72, 81, 103, 100, 50, 57, 121, 97, 119, 61, 61])
		}
	},
	empty: {
		inArr: new Uint8Array([]),
		outArr: new Uint8Array([])
	}
};

describe('encode', () => {
	test('empty array', () => {
		expect(Base64.encode(test_data.empty.inArr)).toStrictEqual(test_data.empty.outArr);
	});

	test('no padding', () => {
		expect(Base64.encode(test_data.no_padding.inArr)).toStrictEqual(test_data.no_padding.outArr);
	});

	test('padding 1 array.len < 3', () => {
		expect(Base64.encode(test_data.pad_1.ltThree.inArr)).toStrictEqual(
			test_data.pad_1.ltThree.outArr
		);
	});

	test('padding 1 array.len > 3', () => {
		expect(Base64.encode(test_data.pad_1.gtThree.inArr)).toStrictEqual(
			test_data.pad_1.gtThree.outArr
		);
	});

	test('padding 2 array.len < 3', () => {
		expect(Base64.encode(test_data.pad_2.ltThree.inArr)).toStrictEqual(
			test_data.pad_2.ltThree.outArr
		);
	});

	test('padding 2 array.len > 3', () => {
		expect(Base64.encode(test_data.pad_2.gtThree.inArr)).toStrictEqual(
			test_data.pad_2.gtThree.outArr
		);
	});
});
