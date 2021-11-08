var maxDepth = function(root) {
    if(root === null) {
        return 0
    }
      return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

maxDepth([3, 9, 20, null, null, 15, 7]) // max depth = 3
//   3
//   ^
//  9 20
//     ^
//   15 17



var minDepth = function (root) {
  if(root === null) {
    return 0
}
  return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
};

minDepth([3, 9, 20, null, null, 15, 7]) // min depth = 2

//   3
//   ^
//  9 20
//     ^
//   15 17