export const Util = {
	strToHexStr(str: string): string {
		let res = '';
		for (let i = 0; i < str.length; i++) res += str.charCodeAt(i).toString(16);
		return res;
	},

	hexStrToByteArray(hexStr: string): Uint8Array {
		const len = hexStr.length / 2;
		const result = new Uint8Array(len);

		for (let hexIdx = 0, i = 0; i < len; hexIdx += 2, i++)
			result[i] = parseInt(hexStr[hexIdx] + hexStr[hexIdx + 1], 16);

		return result;
	},

	byteArrayToString(arr: Uint8Array): string {
		let result = '';

		for (let i = 0; i < arr.length; i++) result += String.fromCharCode(arr[i]);

		return result;
	},

	prettyPrintArr(arr: Uint8Array): string {
		return arr.toString().replaceAll(',', ', ');
	}
};
