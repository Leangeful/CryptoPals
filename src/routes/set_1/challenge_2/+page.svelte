<script lang="ts">
	import { challenges } from '$lib/challenges';
	import { Util } from '$lib/Util';
	import { Base64 } from '$lib/Base64';

	import Data from '$lib/components/Data.svelte';
	import DataInput from '$lib/components/DataInput.svelte';
	import { Xor } from '$lib/Xor';

	const hexStr1 = challenges.set_1.challenge_2.arr;
	const hexStr2 = challenges.set_1.challenge_2.key;

	const bytes1 = Util.hexStrToByteArray(hexStr1);
	const bytes2 = Util.hexStrToByteArray(hexStr2);

	const resBytes = Xor.fixed(bytes1, bytes2);
	const resStr = Util.byteArrayToHexStr(resBytes);
</script>

<h1 class="h1">Set 1 Challenge 2</h1>

<div class="w-4/6 space-y-4 p-6">
	<Data>
		<span slot="head">Hex String 1</span>
		<span slot="content"> {hexStr1}</span>
	</Data>

	<Data>
		<span slot="head">to bytes</span>
		<span slot="content"> {Util.prettyPrintArr(bytes1)}</span>
	</Data>

	<Data>
		<span slot="head">Hex String 2</span>
		<span slot="content"> {hexStr2}</span>
	</Data>

	<Data>
		<span slot="head">to bytes</span>
		<span slot="content">{Util.prettyPrintArr(bytes2)}</span>
	</Data>

	<Data>
		<span slot="head">Result Bytes</span>
		<span slot="content">{Util.prettyPrintArr(resBytes)}</span>
	</Data>
	<Data>
		<span slot="head">Result Ascii</span>
		<span slot="content">{Util.byteArrayToString(resBytes)}</span>
	</Data>

	<Data>
		<span slot="head">Hex Encoded</span>
		<span slot="content">{resStr}</span>
	</Data>
</div>
