function isMagicalBinaryString(str){
  let count1 = 0;
  let count0 = 0;
  for(let i = 0; i < str.length; i++){
    let cur = str[i];
    if(cur === '1') count1++;
    if(cur==='0') count0++;
    if(count1 < count0) return false;
  }
  return count1 === count0;
}


function decialToBinary(){
  
}
