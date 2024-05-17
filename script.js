function firstNonRepeatedChar(str) {
 // Write your code here
	let mp = new Map();
	for(let ch of str){
		mp.set(ch, (mp.get(ch)||0)+1);
	}
	for(let ch of str){
		if(mp.get(ch)===1)return ch;
	}
	return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
