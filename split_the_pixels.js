
function findClosestColors(n, binaryColors){

  let distacne = [];
  let result = [];
  for(let i = 0; i < n ;i++){
    let binaryColor = binaryColors[i];
    let rgb = getRGB(binaryColor);
    let closestColor = findClosestColor(rgb);
    result.push(closestColor);
  }
  return result;


  function getRGB(binary){

    let first = binary.slice(0,8);
    let second = binary.slice(8,16);
    let third = binary.slice(16,24);

    return [decodeBinary(first,8), decodeBinary(second,8), decodeBinary(third,8)];
  }

  function decodeBinary(binary,len){
    if(len === 0) return 0;
    let firstNum = binary.slice(0,1);
    let remaining = binary.slice(1);
    let num =  firstNum === '1' ? Math.pow(2,len-1): 0;
    return decodeBinary(remaining,len-1) + num;
  }

  function findClosestColor(rgb){
    let targets = {'Black': [0,0,0], 'White':[255, 255,255], 'Red': [255,0,0],
      'Green': [0,255,0],'Blue': [0,0,255]};
    let distances = {};

    Object.keys(targets).forEach(function(key){
      let color = targets[key];
      let distance = calcDistance(rgb,color);
      distances[key] = distance;
    });

    let sorted = Object.keys(targets).sort(function(k1, k2){return distances[k1]-distances[k2];});

    if(distances[sorted[0]] === distances[sorted[1]]) return 'Ambiguous';
    return sorted[0];
  }

  function calcDistance(rgb,color){

    let sum = 0;
    rgb.forEach(function(num, i){
      sum += Math.pow(num-color[i],2);
    });

    return sum;
  }
}
