function pathScore(text, pre, post){
  let preMatchCount = 0;
  let postMatchCount = 0;
  let preSub = '';
  let postSub = '';
  let start = 1;
  let end = text.length -1 ;
  let sorted = text.slice();
  sorted.split('').sort(function(a,b){
    if(a < b) return 1;
    if(a > b) return -1;
    return 0;
  });

  while(start <= text.length){
    let substr = text.slice(0,start);
    let idx = pre.indexOf(substr);
    if(idx > 0 && idx+substr.length === pre.length){
      preMatchCount = substr.length;
      preSub = substr;
      break;
    }

    start++;
  }

  while(end >= 0){
    let substr = text.slice(end, text.length);
    let idx = post.indexOf(substr);
    // console.log(substr)
    if(idx === 0) {
      postMatchCount = substr.length;
      postSub = substr;
      break;
    }

    end--;
  }

  if(preMatchCount === 0 && postMatchCount !== 0) return postSub;
  if(preMatchCount !== 0 && postMatchCount === 0) return preSub;
  if(postMatchCount === 0 && preMatchCount === 0) return sorted[0];
  return text;

}

pathScore('nothing', 'bru', 'ingredient');
