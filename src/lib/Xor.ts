export const Xor = {
	fixed(arr: Uint8Array, key: Uint8Array): Uint8Array {
		const res = new Uint8Array(arr.length);

		for (let i = 0; i < arr.length; i++) {
			res[i] = arr[i] ^ key[i];
		}
		return res;
	}
};
