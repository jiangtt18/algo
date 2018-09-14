// leetcode 239 (adjustment: find max through each min from each window)

class Queue {
    constructor(){
        this.arr = [];
    }

    pop(){
        this.arr.shift();
    }

    push(val){
        while(val < this.arr[this.arr.length-1] && this.arr.length !== 0) this.arr.pop();
        this.arr.push(val);

    }

    min(){
        return this.arr[0];
    }
}
var maxSlidingWindow = function(nums, k) {
    let q = new Queue();
    let mins = [];

    for(let i = 0 ; i < nums.length; i++){
        q.push(nums[i]);
        if(i-k+1 >= 0) {
          mins.push(q.min());
          if(nums[i-k+1] === q.min()) q.pop();
        }
    }

    return Math.max(...mins);

};
