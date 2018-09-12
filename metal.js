// https://www.hackerrank.com/contests/juniper-hackathon/challenges/metals

function processData(input) {
    //
    let arr = input.split('\n');
    let rods = arr.map(function(str){return parseInt(str);});
    let cost = rods[0];
    let price = rods[1];
    let len = rods[2];
    let alllens = rods.slice(3);

    alllens.sort(function(a,b) {return a-b;});
    let maxLen = alllens[len-1];
    let max = 0;

    for(let i = 1 ; i < maxLen ;i++){
       let curProfit = calcCurProfit(i);
       max = Math.max(max, curProfit);
    }
    return max;


    function calcCurProfit(l){
        let profit = 0;
        for(let i = 0; i < alllens.length; i++){
            let rod = alllens[i];
            if(rod < i) continue;
            let numOfCut = Math.floor(rod/l);
            profit += Math.max(0, numOfCut * len * price - numOfCut * cost);
        }
        return profit;
    }

}
