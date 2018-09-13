function noRepeatInRange(arr){
  let memo = new Set();
  let count = 0;
  let uniqueCountAtI = [0];
  let flat = arr.reduce(function(accu,cur){return accu.concat(cur)});
  let ceil = Math.max(...flat);
  let floor =Math.min(...flat);
  for(let i = floor ; i <= ceil; i++){
    if(isUnique(i, new Set())){
      count++;
    }
    uniqueCountAtI[i] = count;
  }

  return arr.map(function(range){
    let left = range[0];
    let right = range[1];
    return uniqueCountAtI[right]-uniqueCountAtI[left-1];
  });

  function isUnique(num,digits){
    if(memo.has(num)) return false;
    if(num < 10) return !digits.has(num);
    let digit = num % 10;
    if(digits.has(digit)) return false;
    digits.add(digit);
    let remaining = Math.floor(num/10);
    return isUnique(remaining, digits);
  }
}
