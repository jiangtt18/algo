function sortRoyalName(names){
  let royalNames = [];
  for(let i = 0; i < names.length; i++){
    let name = names[i].split(' ');
    let firstName = name[0];
    let romeNum = name[1];
    royalNames.push([firstName, romeNum]);
  }

  royalNames.sort(function(n1,n2){
    if(n1[0] < n2[0]) return -1;
    if(n1[0] > n2[0]) return 1;

    if(convertRome(n1[1]) < convertRome(n2[1])) return -1;
    if(convertRome(n1[1]) > convertRome(n2[1])) return 1;
    return 0;
  });

  return royalNames.map(function(arr){
    return arr.join('');
  });

  function convertRome(rome){
    
  }
}
