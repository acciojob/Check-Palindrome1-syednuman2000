// complete the given function

function palindrome(str){
	let n = str.length;
	for(let i=0;i<n/2;i++){
		if(str.charAt(i)!=str.charAt(n-1-i)){
			return false;
		}
	}
	return true;
}
module.exports = palindrome
