let input = 265149;

function findDistance(n) {
  let edgeLength = 1;
  while(Math.pow(edgeLength, 2) < n) {
    edgeLength += 2;
  }
  let min = Math.pow(edgeLength - 2,2) + 1;
  let max = Math.pow(edgeLength, 2);
  let shortEdge = edgeLength - 1;
  // as the number is always in the outer ring, one axis will always be ((squareWidth - 1) / 2) from center,
  // and the other axis will be variable
  let distance = (shortEdge / 2) + Math.abs((((n - min) % shortEdge) + 1) - (shortEdge / 2))
  console.log(distance);
}

findDistance(265149); // 438