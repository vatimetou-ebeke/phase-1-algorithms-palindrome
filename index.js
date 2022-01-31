function isPalindrome(word) {
  // Write your algorithm here
  for (var i = 0; i < word.length; i++) {
    if(word[i]!==word[word.length - 1-i]) {
      return false;
    }
  }
  return true
}

/* 
  Add your pseudocode here
  using a loop through
  using an if to check if the the end and the strat matchup


*/

/*
  Add written explanation of your solution here
  looping through the string to check if the End aclually machup
  with our loop through with check the start with the End

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log(isPalindrome("anna"))
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
