// kmp to find the index
function firstOccurance(str, sub){
  let prefixTable = buildPrefixTable(sub);
  let r1 = 0;
  let r2 = 0;
  if(sub.length === 0) return -1;
  while(r1 < str.length){
    if(str[r1] === sub[r2] || sub[r2] === '*'){
      r1++;
      r2++;
    } else {
      if(r2 === 0){
        r1++;
      } else {
        r2 = prefixTable[r2-1];
      }
    }

   if (r2 === sub.length)  return r1-sub.length;

  }
  return -1;

  function buildPrefixTable(sub){
    let arr = [0];
    let left = 0;
    let right = 1;
    while(right < sub.length){
      if(sub[left] === sub[right]){
        arr[right] = left+1;
        left++;
        right++;
      } else {

        if(left === 0) {
          arr[right] = 0;
          right++;
        } else {
          left = arr[left-1];
        }
      }
    }
    return arr;
  }
}
