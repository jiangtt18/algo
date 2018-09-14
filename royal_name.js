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
    return arr.join(' ');
  });

  function convertRome(rome){
    let dic = {I:1, IV:4, V:5, IX:9, X:10, XL:40, L:50};
    let twoChars = {IV:4, IX:9, XL:40};
    if(rome in dic) return dic[rome];
    let num = 0;

    for(let key in twoChars){
      let i = rome.indexOf(key);
      if(i > -1) {
        rome.splice(i,2);
        num += twoChars[key];
      }
    }
    for(let i = 0; i < rome.length; i++){
      num += dic[rome[i]];
    }

    return num;
  }
}
