import { describe, expect, test } from 'vitest';
import { Xor } from './Xor';
import { Util } from './Util';

const test_data = {
	same_size: {
		arr: Util.hexStrToByteArray('1c0111001f010100061a024b53535009181c'),
		key: Util.hexStrToByteArray('686974207468652062756c6c277320657965'),
		res: Util.hexStrToByteArray('746865206b696420646f6e277420706c6179')
	}
};

describe('fixed xor', () => {
	test('same size xor', () => {
		expect(Xor.fixed(test_data.same_size.arr, test_data.same_size.key)).toStrictEqual(
			test_data.same_size.res
		);
	});
});
