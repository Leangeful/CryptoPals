const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
const pad = 61;

export const Base64 = {
	encode(arr: Uint8Array): Uint8Array {
		const mask = 63;
		const len = arr.length;
		const resLen = Math.ceil(len / 3) * 4;
		const result = new Uint8Array(resLen);

		let resIdx = 0;
		let i = 0;

		for (; i < len - 2; ) {
			let bits = arr[i] << 16;
			bits += arr[i + 1] << 8;
			bits += arr[i + 2];

			result[resIdx] = alphabet[(bits >> 18) & mask].charCodeAt(0);
			result[resIdx + 1] = alphabet[(bits >> 12) & mask].charCodeAt(0);
			result[resIdx + 2] = alphabet[(bits >> 6) & mask].charCodeAt(0);
			result[resIdx + 3] = alphabet[bits & mask].charCodeAt(0);

			resIdx += 4;
			i += 3;
		}

		const rest = len % 3;

		if (rest) {
			let bits = arr[i] << 16;
			bits += i + 1 < len ? arr[i + 1] << 8 : 0;

			result[resIdx] = alphabet[(bits >> 18) & mask].charCodeAt(0);
			result[resIdx + 1] = alphabet[(bits >> 12) & mask].charCodeAt(0);

			if (rest == 2) {
				result[resIdx + 2] = alphabet[(bits >> 6) & mask].charCodeAt(0);
			} else {
				result[resIdx + 2] = pad;
			}

			result[resIdx + 3] = pad;
		}
		return result;
	}
};
