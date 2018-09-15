function reachingPoint(x1,y1,x2,y2){
  return DFS(x1,y1,x2,y2) === true ? "Yes" : "No";
}

function DFS(x1,y1,x2,y2){
  if(x1 > x2 || y1 > y2) return false;
  if(x1=== x2 && y1 === y2) return true;

  let rightMove = DFS(x1+y1, y1, x2,y2);
  let downMove = DFS(x1,y1+x1,x2,y2);

  return rightMove || downMove;
}



reachingPoint(1,4,5,14);
