class UnionFind {
    constructor(ranks, parents){
        this.ranks = ranks;
        this.parents = parents;
    }

    find(v){
        if(v === this.parents[v]) return this.parents[v];
        this.parents[v] = this.find(this.parents[v]);
        return this.parents[v];
    }

    union(v1,v2){
        let p1 = this.find(v1);
        let p2 = this.find(v2);

        if(p1 === p2) return false; // under the same root, no need to merge;

        if(this.ranks[p1] < this.ranks[p2]){
            this.parents[p1] = p2;
        } else if(this.ranks[p1] > this.ranks[p2]){
            this.parents[p2] = p1;
        } else {
            this.parents[p1] = p2;
            this.ranks[p2]++;
        }

        return true;

    }

    getParents(){
      return this.parents;
    }
  }


    function taskMaster(n, task1, task2){
      let ranks = {};
      let parents = {};
      let cycle = 0;
      let len = task1.length;
      for(let i = 0; i < len; i++){
        let num = task1[i];
        ranks[num] = 1;
        parents[num] = num;
      }
      for(let i = 0; i < len; i++){
        let  num = task2[i];
        ranks[num] = 1;
        parents[num] = num;
      }

      let uf = new UnionFind(ranks, parents);
      for(let i = 0; i < len; i++){
        let pre = task1[0];
        let next = task2[0];
        let hasCycle = !uf.union(pre, next);
        if(hasCycle) cycle++;
      }

      return n - cycle;
    }
