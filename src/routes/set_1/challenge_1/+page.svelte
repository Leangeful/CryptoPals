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
</script>

<h1 class="h1">Set 1 Challenge 1</h1>

<div class="w-4/6 space-y-4 p-6">
	<DataInput bind:value on:reset={() => (value = chalStr)}>
		<span slot="head">Plain String</span>
	</DataInput>

	<Data>
		<span slot="head">Hex String</span>
		<span slot="content">{hexStr} </span>
	</Data>

	<Data>
		<span slot="head">Convert to byte array</span>
		<span slot="content">{Util.prettyPrintArr(byteArr)}</span>
	</Data>

	<Data>
		<span slot="head">Encode Base64</span>
		<span slot="content">{Util.prettyPrintArr(cipherArr)}</span>
	</Data>

	<Data>
		<span slot="head">Print string</span>
		<span slot="content">{Util.byteArrayToString(cipherArr)}</span>
	</Data>
</div>
