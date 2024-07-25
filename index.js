function isPalindrome(word) {
  // Write your algorithm here
 let abba = word.split("").reverse().join("")
 
 
  if(word === abba){
    return true
  }else
  return false
 
}

/* 
  Add your pseudocode here

*/

/*
  Add written explanation of your solution here
*///The function returns true  if the argument is a palindrome and false if it is not. The function is case sensitive

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));
  console.log("=>", isPalindrome("abba"))

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
