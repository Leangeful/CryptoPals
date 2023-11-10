//const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
const alphabet = [
	65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88,
	89, 90, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114,
	115, 116, 117, 118, 119, 120, 121, 122, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 43, 47
];
const pad = 61;
const mask = 63;

export const Base64 = {
	encode(inArr: Uint8Array): Uint8Array {
		const rest = inArr.length % 3;
		const arr = new Uint8Array(inArr.length + (rest ? 3 - rest : 0));
		arr.set(inArr);

		const padding = rest ? (rest == 2 ? [pad] : [pad, pad]) : [];

		const result = new Uint8Array((arr.length / 3) * 4);

		for (let i = 0; i < arr.length - 2; i += 3) {
			const bits = (arr[i] << 16) + (arr[i + 1] << 8) + arr[i + 2];

			const resIdx = (i / 3) * 4;
			result.set(
				[
					alphabet[(bits >>> 18) & mask],
					alphabet[(bits >>> 12) & mask],
					alphabet[(bits >>> 6) & mask],
					alphabet[bits & mask]
				],
				resIdx
			);
		}

		result.set(padding, result.length - padding.length);

		return result;
	}
};
