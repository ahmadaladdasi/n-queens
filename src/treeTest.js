



var countNRooksSolutions = function(value, oldBoard) {
  var board = new Board(oldBoard);



treeMethods.addChild = function(value) {

  var child = Tree(value);
  this.children.push(child);
  };

treeMethods.contains = function(target) {

  if ( this.value === target ) {
    return true;
  }
  for ( var i = 0; i < this.children.length; i++ ) {
    var child = this.children[i];
    if (child.contains(target)) {
      return true;
    }
  }
  return false;
  };


treeMethods.traverse = function(callback) {
  callback(this.value);

  if (!this.children) { return; }
  for (var i = 0; i < this.children.length; i++) {
    var child = this.children[i];
    child.traverse(callback);
  }
};

  if (n < 2) return [[1]];
  var board = board || new Board({"n": n});
  while(true) {
    if(board.get(row).includes(1)) {
      var index = board.get(row).indexOf(1)
      board.togglePiece(row,index) // untoggling
      board.togglePiece(row,index+1)
    } else {
      board.togglePiece(row,col)
    }
    if (board.hasAnyRooksConflicts()) { // case of a conflict
      board.togglePiece(row,col);
      if (col === n-1){
        row -= 1;
        return findNRooksSolution(n,board,row,col)
      } else {
          col += 1
          return findNRooksSolution(n,board,row,col)
        }
    } else {
        if (row === n-1){
          console.log('Single solution for ' + n + ' rooks:', JSON.stringify(board.rows()));
          return board.rows();
        } else {
            row += 1;
            return findNRooksSolution(n,board, row, 0)
          }
      }
  }