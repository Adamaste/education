var a = ["apple", "grape", "orange", "apple", "grape", "orange", "kivi", "orange", "mango", "orange", "grape"];
var b = [];
for (let i = 0; i < a.length; i++) {
	let found = false;
	for (let g = 0; g < b.length; g++) {
		if (a[i] === b[g].key) {
			found = true;
			b[g].value++;
			break;
		}
	}	
	if (!found) {
		b.push({ key: a[i], value: 1 });
	}
}
console.log(b);