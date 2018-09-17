// https://stackoverflow.com/questions/12878849/algorithm-to-find-non-dominated-pairs
function non_Domininet(arr){
  arr.sort(function(subarr1,subarr2){return subarr2[0]-subarr1[0]});
  console.log(arr)
  let result = [];
  let maxSoFar = -Infinity;
  for(let i = 0; i < arr.length; i++) {
    if(arr[i][1] > maxSoFar) {
      result.push(arr[i]);
      maxSoFar = arr[i][1];
    }
  }
  return result;
}

non_Domininet([[3,2],[8,7],[6,9],[3,4],[7,8]])
