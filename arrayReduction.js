class PriorityQueue {
  constructor(){
    this.arr = [];
    this.sum = 0;
  }

  push(num){

    if(num <= this.peek || this.arr.length === 0 ){
      this.sum += num;
    } else{
      this.sum += this.arr.pop();
      this.arr.push(num);
    }

  }

  peek(){
    return this.arr[this.arr.length-1];
  }

  cost(){
    return this.sum;
  }
}

function reducedArray(arr){
  let q = new PriorityQueue();
  for(let i = 0; i < arr.length; i++){
    q.push(arr[i]);
  }
  return q.cost();
}
