function rot13(str) { // LBH QVQ VG!
  let result=[];
  let value = 0
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

  for(let i = 0; i < str.length; i++){
    if(alphabet.indexOf(str[i]) !== -1){
      value = str[i].charCodeAt(0)
      if(value <= 77){
        result.push(String.fromCharCode(value + 13))
      }
      else{
         result.push(String.fromCharCode(value - 13))
      }
    }
    else{
      result.push(str[i])
    }
  }

  return result.join('');
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
