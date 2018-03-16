/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

// window.findSolutions = function(n, row = 0, col = 0) { // , row = 0
//   var board = new Board({n: n});
  
//   board.togglePiece(row, col);
//   for(var i=0)
//   board.toggle(1, 1);
//   // place piece in next open (use togglePiece)
//   for (var )
//   // Check if conflict
//       // No? Move to next row
//       // Yes? Pick up piece, place it on next row
//       // IF YES && ON LAST COLUMN: pick up that piece and the second to last piece you placed
// findSolutions(n, i+1, i+1)
// }


window.findNRooksSolution = function(n, board, row = 0, col = 0) { 
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
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n, board, row = 0, col = 0, depth = 0) {
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
          //counter++
          // untoggle last piece
          // toggle the next piece (call recursion on next spot?)
          // && the first piece was placed on last col
        } else {
            row += 1;
            return findNRooksSolution(n,board, row, 0)
          }
      }
  }
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n, board, row = 0, col = 0) {
  var board = board || new Board({"n": n});
  if (n === 0 || n === 2 || n === 3) return board.rows();
  if (n === 1 ) return [[1]];
  while(true) {
    if(board.get(row).includes(1)) {
      var index = board.get(row).indexOf(1)
      board.togglePiece(row,index) // untoggling
      board.togglePiece(row,index+1)
    } else {
      board.togglePiece(row,col)
    }
    if (board.hasAnyQueensConflicts()) { // case of a conflict
      board.togglePiece(row,col);
      if (col === n-1){
        row -= 1;
        return findNQueensSolution(n,board,row,col)
      } else {
          col += 1
          return findNQueensSolution(n,board,row,col)
        }
    } else {
        if (row === n-1){
          console.log('Single solution for ' + n + 'queens:', JSON.stringify(board.rows()));
          return board.rows();
        } else {
            row += 1;
            return findNQueensSolution(n,board, row, 0)
          }
      }
  }
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
