function maxLength(arr, k){
  let subarrs =[] ;
  generateSubs(arr,0,[], k,0);
  subarrs.sort(function(arr1, arr2){
    return arr2.length - arr1.length;
  });

  return subarrs[0];


  function generateSubs(arr,pointer,temp,k,sum){
    for(let i = pointer; i < arr.length; i++){
      temp.push(arr[i]);
      sum += arr[i];
      if(sum <= k) {subarrs.push(temp.slice());}
      generateSubs(arr,i+1,temp, k,sum);
      let num = temp.pop();
      sum -= num;
    }
}

}

maxLength([1,2,3],3);
