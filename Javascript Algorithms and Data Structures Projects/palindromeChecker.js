function palindrome(str) {
  // Good luck!
  //clear numbers
  str = str.replace(/[\W_]/g, '').toLowerCase();

  let strReverse = str.split('').reverse().join('').toLowerCase();
  if(str === strReverse)
  {
    return true;
  }
  else
  {
    return false;
  }
}

palindrome("eye") 
palindrome("eye") 
palindrome("_eye") 
palindrome("race car") 
palindrome("not a palindrome") 
palindrome("A man, a plan, a canal. Panama") 
palindrome("never odd or even")
palindrome("nope") 
palindrome("almostomla") 
palindrome("My age is 0, 0 si ega ym.") 
palindrome("1 eye for of 1 eye.") 
palindrome("0_0 (: /-\ :) 0-0") 
palindrome("five|\_/|four")
