const isPalindrome = (value) => {
  let original = value;
  let change = "";
  let reverse = [];
  let toArray = value.split("");

  for (var i = toArray.length; i > 0; --i) {
    reverse.push(toArray[i - 1]);
  }
  change = reverse.join("");
  if (original === change) {
    return true;
  } else {
    return false;
  }
};

console.log(isPalindrome("ana")); // returns true
console.log(isPalindrome("holo")); // returns false
console.log(isPalindrome("neveroddoreven")); // returns true
console.log(isPalindrome("stresseddesserts")); // returns true
