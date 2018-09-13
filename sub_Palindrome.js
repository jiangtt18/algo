function subPali(s){
  let set = new Set();
  let oddCount = 0;
  let evenCount = 0
  for(let i = 0; i < s.length; i++){
    oddCount += expendFromCenter(i,i,s);
    evenCount += expendFromCenter(i,i+1,s);
  }

  return set.size;

  function expendFromCenter(left, right, s){
    if(left < 0 || right > s.length -1) return;
    let curStr = s.slice(left,right+1);
    if(s[left] === s[right]) set.add(curStr);
    return expendFromCenter(left-1, right+1,s);
  }
}
