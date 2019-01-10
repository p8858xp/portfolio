// reversi.js
// helper functions written in this module

const rev = {
    repeat: function(value, n) {
        const arr = [];
        for (let i = 0; i < n; i++){
          arr.push(value);
        }
        return arr;
    },

    generateBoard: function(rows, columns, initialCellValue) {
        return rev.repeat(initialCellValue, rows*columns);
    },

    rowColToIndex: function(board, rowNumber, columnNumber){
      // implementation
      const boardDim = Math.sqrt(board.length);
      return boardDim*rowNumber+columnNumber;
    },
    indexToRowCol: function(board, i){
      const boardDim = Math.sqrt(board.length);
      const rowNum = Math.floor(i / boardDim);
      const colNum = i % boardDim;
      return {
        "row": rowNum,
        "col": colNum
      };
    },
    setBoardCell: function(board, letter, row, col){
      const copy = board.slice();
      const index = rev.rowColToIndex(board, row, col);
      copy[index] = letter;
      return copy;
    },
    algebraicToRowCol: function(algebraicNotation) {
      const arrAlg = algebraicNotation.split("");
      if(!isNaN(arrAlg[0]) || arrAlg.length < 2 || arrAlg.length > 2) {
          return undefined;
      }
      for(let i = 0; i < arrAlg.length; i++) {
          if(!arrAlg[i].match("^[a-zA-Z0-9]*$")) {
              return undefined;
          }
      }
      const col = (algebraicNotation.charCodeAt(0) - 65);
      const row = parseInt(algebraicNotation.charAt(1)) - 1;
      return {"row": row, "col": col};
    },
    placeLetters: function(board, letter, ...algebraicNotation) {
      let newBoard = [...board];
      for (const algNotations of algebraicNotation){
        const rowcol = rev.algebraicToRowCol(algNotations);
        newBoard = rev.setBoardCell(newBoard, letter, rowcol["row"], rowcol["col"]);
      }
      return newBoard;
    },
    boardToString: function(board) {
      const boardDim = Math.sqrt(board.length);
      const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let index = 0;
      let bString = "     ";

      for (let i = 0; i < boardDim; i++){
        if (boardDim - i === 1){
          bString += alphabet.charAt(i) + "  ";
        }
        else {
          bString += alphabet.charAt(i) + "   ";
        }
      }
      bString += "\n   ";
      for (let i = 0; i < boardDim; i++){
        for (let j = 0; j < boardDim; j++){
          bString += "+---";
        }
        bString += "+\n ";
        bString += i+1;
        for (let k = 0; k < boardDim; k++){
          if (board[index] === " "){
            if (boardDim - k === 1){
              bString += " |   ";
            }
            else {
              bString += " |  ";
            }

          }
          else if (board[index] === "X"){
            bString += ` | ${board[index]}`;
          }
          else {
            bString += ` | ${board[index]} `;
          }
          index++;
        }
        if (boardDim - i === 1){
          bString += "|\n";
        }
        else {
            bString += "|\n   ";
        }
      }
      bString += "   ";
      for (let i = 0; i < boardDim; i++){
        bString += "+---";
      }
      bString += "+\n";
      return bString;
    },
    isBoardFull: function(board) {
        for(const cell of board) {
            if(cell === " ") {
                return false;
            }
        }
        return true;
    },
    flip: function(board, row, col) {
      let updatedArr = board.slice();
      const index = rev.rowColToIndex(board, row, col);
      if (updatedArr[index] !== " "){
        if (updatedArr[index] === "O"){
          updatedArr = rev.setBoardCell(board, "X", row, col);
        }
        else if (updatedArr[index] === "X"){
          updatedArr = rev.setBoardCell(board,"O", row, col);
        }
      }
      return updatedArr;
    },
    flipCells: function(board, cellsToFlip) {
      let updatedArr = board.slice();
      for(let i = 0; i < cellsToFlip.length; i++) {
          for(let j = 0; j < cellsToFlip[i].length; j++) {
              // i is referring to the outermost array of cellsToFlip
              // j is referring to the array inside of i
              // [0] is referring to the row index and [1] is referring to the column index
              const row = cellsToFlip[i][j][0];
              const col = cellsToFlip[i][j][1];
              updatedArr = rev.flip(updatedArr, row, col);
          }
      }
      return updatedArr;
    },
    getCellsToFlip: function(board, lastRow, lastCol) {
      // have to check for 8 possible directions starting from the last move made by player
      // LEFT check
      let potential = [];
      const guaranteedFlip = [];
      const playerLastMove = board[rev.rowColToIndex(board, lastRow, lastCol)];
      let leftNeighbors = lastCol - 1;
      while (leftNeighbors >= 0){
        // if the left cell neighbor is the opponent's sign and is definitely not an empty cell then push to potential array
        if (playerLastMove !== board[rev.rowColToIndex(board,lastRow, leftNeighbors)] && board[rev.rowColToIndex(board,lastRow, leftNeighbors)] !== " "){
          potential.push([lastRow, leftNeighbors]);
        }
        else if (playerLastMove === board[rev.rowColToIndex(board,lastRow, leftNeighbors)]){
          // also make sure it's not a special case where it's not just two of the same signs next to each other on the board
          // there has to be at least one of the enemy's sign in between your two pieces for them to be flipped
          if (potential.length > 0){
            guaranteedFlip.push(potential);
            // must break at this point b/c of the rules of the game
            break;
          }
        }
        leftNeighbors--;
      }

      // RIGHT check
      potential = [];
      let rightNeighbors = lastCol + 1;
      const boardDim = Math.sqrt(board.length);
      while (rightNeighbors < boardDim){
        // if the right cell neighbor is the opponent's sign and is definitely not an empty cell then push to potential array
        if (playerLastMove !== board[rev.rowColToIndex(board,lastRow, rightNeighbors)] && board[rev.rowColToIndex(board,lastRow, rightNeighbors)] !== " "){
          potential.push([lastRow, rightNeighbors]);
        }
        else if (playerLastMove === board[rev.rowColToIndex(board,lastRow, rightNeighbors)]){
          // also make sure it's not a special case where it's not just two of the same signs next to each other on the board
          // there has to be at least one of the enemy's sign in between your two pieces for them to be flipped
          if (potential.length > 0){
            guaranteedFlip.push(potential);
            // must break at this point b/c of the rules of the game
            break;
          }
        }
        rightNeighbors++;
      }

      // UP check (the rows change)
      potential = [];
      let upNeighbors = lastRow - 1;
      while (upNeighbors >= 0){
        // if the upper cell neighbor is the opponent's sign and is definitely not an empty cell then push to potential array
        if (playerLastMove !== board[rev.rowColToIndex(board,upNeighbors, lastCol)] && board[rev.rowColToIndex(board,upNeighbors, lastCol)] !== " "){
          potential.push([upNeighbors, lastCol]);
        }
        else if (playerLastMove === board[rev.rowColToIndex(board,upNeighbors, lastCol)]){
          // also make sure it's not a special case where it's not just two of the same signs next to each other on the board
          // there has to be at least one of the enemy's sign in between your two pieces for them to be flipped
          if (potential.length > 0){
            guaranteedFlip.push(potential);
            // must break at this point b/c of the rules of the game
            break;
          }
        }
        upNeighbors--;
      }

      // DOWN check
      potential = [];
      let downNeighbors = lastRow + 1;
      while (downNeighbors < boardDim){
        // if the down cell neighbor is the opponent's sign and is definitely not an empty cell then push to potential array
        if (playerLastMove !== board[rev.rowColToIndex(board,downNeighbors, lastCol)] && board[rev.rowColToIndex(board,downNeighbors, lastCol)] !== " "){
          potential.push([downNeighbors, lastCol]);
        }
        else if (playerLastMove === board[rev.rowColToIndex(board,downNeighbors, lastCol)]){
          // also make sure it's not a special case where it's not just two of the same signs next to each other on the board
          // there has to be at least one of the enemy's sign in between your two pieces for them to be flipped
          if (potential.length > 0){
            guaranteedFlip.push(potential);
            // must break at this point b/c of the rules of the game
            break;
          }
        }
        downNeighbors++;
      }

      // UPPER LEFT DIAGONAL check
      potential = [];
      upNeighbors = lastRow - 1;
      leftNeighbors = lastCol - 1;
      while (upNeighbors >= 0 && leftNeighbors >= 0){
        // if the upper left cell neighbor is the opponent's sign and is definitely not an empty cell then push to potential array
        if (playerLastMove !== board[rev.rowColToIndex(board,upNeighbors, leftNeighbors)] && board[rev.rowColToIndex(board,upNeighbors, leftNeighbors)] !== " "){
          potential.push([upNeighbors, leftNeighbors]);
        }
        else if (playerLastMove === board[rev.rowColToIndex(board,upNeighbors, leftNeighbors)]){
          // also make sure it's not a special case where it's not just two of the same signs next to each other on the board
          // there has to be at least one of the enemy's sign in between your two pieces for them to be flipped
          if (potential.length > 0){
            guaranteedFlip.push(potential);
            // must break at this point b/c of the rules of the game
            break;
          }
        }
        upNeighbors--;
        leftNeighbors--;
      }

      // UPPER RIGHT DIAGONAL check
      potential = [];
      upNeighbors = lastRow - 1;
      rightNeighbors = lastCol + 1;
      while (upNeighbors >= 0 && rightNeighbors < boardDim){
        // if the upper right cell neighbor is the opponent's sign and is definitely not an empty cell then push to potential array
        if (playerLastMove !== board[rev.rowColToIndex(board,upNeighbors, rightNeighbors)] && board[rev.rowColToIndex(board,upNeighbors, rightNeighbors)] !== " "){
          potential.push([upNeighbors, rightNeighbors]);
        }
        else if (playerLastMove === board[rev.rowColToIndex(board,upNeighbors, rightNeighbors)]){
          // also make sure it's not a special case where it's not just two of the same signs next to each other on the board
          // there has to be at least one of the enemy's sign in between your two pieces for them to be flipped
          if (potential.length > 0){
            guaranteedFlip.push(potential);
            // must break at this point b/c of the rules of the game
            break;
          }
        }
        upNeighbors--;
        rightNeighbors++;
      }

      // LOWER LEFT DIAGONAL check
      potential = [];
      downNeighbors = lastRow + 1;
      leftNeighbors = lastCol - 1;
      while (downNeighbors < boardDim && leftNeighbors >= 0){
        // if the lower left cell neighbor is the opponent's sign and is definitely not an empty cell then push to potential array
        if (playerLastMove !== board[rev.rowColToIndex(board,downNeighbors, leftNeighbors)] && board[rev.rowColToIndex(board,downNeighbors, leftNeighbors)] !== " "){
          potential.push([downNeighbors, leftNeighbors]);
        }
        else if (playerLastMove === board[rev.rowColToIndex(board,downNeighbors, leftNeighbors)]){
          // also make sure it's not a special case where it's not just two of the same signs next to each other on the board
          // there has to be at least one of the enemy's sign in between your two pieces for them to be flipped
          if (potential.length > 0){
            guaranteedFlip.push(potential);
            // must break at this point b/c of the rules of the game
            break;
          }
        }
        downNeighbors++;
        leftNeighbors--;
      }

      // LOWER RIGHT DIAGONAL check
      potential = [];
      downNeighbors = lastRow + 1;
      rightNeighbors = lastCol + 1;
      while (downNeighbors < boardDim && rightNeighbors < boardDim){
        // if the lower right cell neighbor is the opponent's sign and is definitely not an empty cell then push to potential array
        if (playerLastMove !== board[rev.rowColToIndex(board,downNeighbors, rightNeighbors)] && board[rev.rowColToIndex(board,downNeighbors, rightNeighbors)] !== " "){
          potential.push([downNeighbors, rightNeighbors]);
        }
        else if (playerLastMove === board[rev.rowColToIndex(board,downNeighbors, rightNeighbors)]){
          // also make sure it's not a special case where it's not just two of the same signs next to each other on the board
          // there has to be at least one of the enemy's sign in between your two pieces for them to be flipped
          if (potential.length > 0){
            guaranteedFlip.push(potential);
            // must break at this point b/c of the rules of the game
            break;
          }
        }
        downNeighbors++;
        rightNeighbors++;
      }
      return guaranteedFlip;
    },
    isValidMove: function(board, letter, row, col) {
      const updated = rev.setBoardCell(board, letter, row, col);
      const moveIndex = rev.rowColToIndex(board, row, col);
      const ctoflip = rev.getCellsToFlip(updated, row, col);
      // this checks if the space is an empty cell, checks if it's a valid boundary, and finally if at least one piece of
      // of the opponent's can be flipped with the move
      if (board[moveIndex] === " " && moveIndex >= 0 && moveIndex < board.length && (ctoflip.length > 0)){
        return true;
      }
      else {
        return false;
      }
    },
    isValidMoveAlgebraicNotation: function(board, letter, algebraicNotation){
      const translated = rev.algebraicToRowCol(algebraicNotation);
      const bool = rev.isValidMove(board, letter, translated["row"], translated["col"]);
      return bool;
    },
    getLetterCounts: function(board) {
      let numX = 0;
      let numO = 0;
      for (let i = 0; i < board.length; i++){
        if (board[i] === "X"){
          numX++;
        }
        if (board[i] === "O"){
          numO++;
        }
      }
      return {
        "X": numX,
        "O": numO
      };
    },
    getValidMoves: function(board, letter) {
      const arrValidMoves = [];
      for(let i = 0; i < board.length; i++) {
        // get each index's row and col information
        const rowCol = rev.indexToRowCol(board, i);
        if(rev.isValidMove(board, letter, rowCol["row"], rowCol["col"])) {
            arrValidMoves.push([rowCol["row"], rowCol["col"]]);
        }
      }
      return arrValidMoves;
    }
};
module.exports = rev;
