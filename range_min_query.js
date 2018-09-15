// https://www.hackerrank.com/challenges/range-minimum-query/problem
// https://www.youtube.com/watch?v=ZBHKZF5w4YU&t=603s


class SegmentTree{
  constructor(arr){
    this.arr = arr;
    this.tree = [];
    for(let i = 0; i < this.arr.length*2 -1; i++){
      this.tree[i] = Infinity;
    }

  }

  buildTree(left, right, cur){
    if(left === right) {
      this.tree[cur] = this.arr[left];
      return this.tree[cur];
    }

    let mid = Math.floor((left + right)/2)
    let leftMin= this.buildTree(left, mid, 2*cur+1);
    let rightMin = this.buildTree(mid+1, right, 2*cur+2);
    this.tree[cur] = Math.min(leftMin, rightMin);
    return this.tree[cur];
  }

  findMin(low, high,left, right, cur){
    if(low<=left && high >= right) return this.tree[cur];
    if(high < left || low > right) return Infinity;
    let mid = Math.floor((left+right)/2)
    let leftMin = this.findMin(low, high, left, mid, 2*cur+1);
    let rightMin = this.findMin(low, high, mid+1, right, 2* cur+2);
    return Math.min(leftMin, rightMin);
  }
  getTree(){
    return this.tree;
  }
}

function rangeMinQuery(arr, ranges){
  let tree = new SegmentTree(arr);
  tree.buildTree(0,arr.length-1,0);

  let result = [];
  for(let i = 0 ; i < ranges.length; i++){
    let range = ranges[i];
    let low = range[0];
    let high = range[1];
    result.push(tree.findMin(low, high,0,arr.length-1,0))
  }
  return result;
}

rangeMinQuery([10, 20, 30, 40, 11, 22, 33, 44, 15, 5],[[0, 5],
[1, 2],
[8, 9],
[0, 9],
[4, 6]])
