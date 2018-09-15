// Leetcode: 3Sum Smaller
// Given an array of n integers nums and a target, find the number of index triplets i, j, k with 0 <= i < j < k < n that satisfy the condition nums[i] + nums[j] + nums[k] < target.
// For example, given nums = [-2, 0, 1, 3], and target = 2.
// Return 2. Because there are two triplets which sums are less than 2:
// [-2, 0, 1]
// [-2, 0, 3]
// Follow up:
// Could you solve it in O(n2) runtime?

function threeSumSamller(arr, target){
  if(arr.length < 3) return 0;
  arr.sort(function(n1,n2){return n1-n2;});
  let count = 0;
  for(let i = 0; i < arr.length-2; i++){
    let left = i+1;
    let right = arr.length-1;
    while(left < right){

      if(arr[i]+arr[left] + arr[right] < target){
        count+= right-left;
        left++;
      } else {
        right--;
      }
    }
  }

  return count;
}

threeSumSamller([-2, 0, 1,3],2);
