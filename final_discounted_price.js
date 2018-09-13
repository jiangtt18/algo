// use stack
function finalDiscountedPrice(nums){
  let q = [nums[0]];
  let sum = 0;
  for(let i = 1; i <  nums.length; i++){
    let cur = nums[i];

    while(q[q.length-1] >= cur && q.length >= 0 ){
      sum += q[q.length-1] - cur;
      q.pop();
    }

     q.push(cur);
  }

  return sum + q.reduce(function(accu,num){return num + accu;},0);
}
