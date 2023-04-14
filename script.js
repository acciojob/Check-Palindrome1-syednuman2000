// complete the given function

function palindrome(str){
	let n = str.length;
	for(let i=0;i<n/2;i++){
		if(str.charAt(i).toLowerCase()!=str.charAt(n-1-i).toLowerCase()){
			return false;
		}
	}
	return true;
}
module.exports = palindrome
