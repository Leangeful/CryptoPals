<script lang="ts">
	import { challenges } from '$lib/challenges';
	import { Util } from '$lib/Util';
	import { Base64 } from '$lib/Base64';

	import Data from '$lib/components/Data.svelte';
	import DataInput from '$lib/components/DataInput.svelte';

	const chalStr = challenges.set_1.challenge_1.inStr;
	let value = chalStr;

	$: hexStr = Util.strToHexStr(value);
	$: byteArr = Util.hexStrToByteArray(hexStr);
	$: cipherArr = Base64.encode(byteArr);

	/* function onReset() {
		value = chalStr;
	} */
</script>

<div class="container h-full mx-auto flex flex-col mt-10 items-center space-y-4">
	<h1 class="h1">Set 1 Challenge 1</h1>

	<div class="card w-4/6 space-y-4 p-6">
		<p>Plain String</p>
		<DataInput bind:value on:reset={() => (value = chalStr)} />

		<p>Hex String</p>
		<Data>{hexStr}</Data>

		<p>Convert to byte array</p>
		<Data>{Util.prettyPrintArr(byteArr)}</Data>

		<p>Encode Base64</p>
		<Data>{Util.prettyPrintArr(cipherArr)}</Data>

		<p>Print string</p>
		<Data>{Util.byteArrayToString(cipherArr)}</Data>
	</div>
</div>
