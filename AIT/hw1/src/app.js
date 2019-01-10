// app.js

// PREP
// bringing in required modules
const rev = require('./reversi.js');
const readlineSync = require('readline-sync');
const fs = require('fs');

// must first check if a config file is specified or not

// if no config file is specified then begin a user controlled game
if (process.argv[2] === undefined){
  console.log("REVERSI");
  let width;
  let currentPlayer = "";
  let yourChoice = "";
  let cpu = "";
  while (true){
    width = readlineSync.question("How wide should the board be? (even numbers between 4 and 26, inclusive)");
    if (!isNaN(width) && width >=4 && width <= 26 && width % 2 === 0){
      break;
    }
  }
  while (true){
    yourChoice = readlineSync.question("Pick your letter: X (black) or O (white)");
    if (yourChoice === "X" || yourChoice === "O"){
      console.log("Player is " + yourChoice);
      if (yourChoice === "X"){
        currentPlayer = yourChoice;
        cpu = "O";
      }
      else {
        cpu = "X";
        currentPlayer = cpu;
      }
      break;
    }
  }
  let board = rev.generateBoard(width, width, " ");
  board = rev.setBoardCell(board, "O", Math.floor((width-1)/2), Math.floor((width-1)/2));
  board = rev.setBoardCell(board, "X", Math.floor((width-1)/2), Math.ceil((width-1)/2) );
  board = rev.setBoardCell(board, "X", Math.ceil((width-1)/2), Math.floor((width-1)/2));
  board = rev.setBoardCell(board, "O", Math.ceil((width-1)/2), Math.ceil((width-1)/2));
  console.log(rev.boardToString(board));

  // initialize pass count to 0
  // once either the board is completely filled with pieces or pass count reaches 2, the game ends(while loop breaks)
  let passNumber = 0;
  while (!rev.isBoardFull(board) || passNumber < 2){
    let move;
    // check whose turn it is
    if (currentPlayer === yourChoice){
      // if there are no valid moves to make then tell the player to press <ENTER> to pass instead of allowing player to make a move
      if (rev.getValidMoves(board, currentPlayer).length === 0){
        console.log("No valid moves available for you.");
        readlineSync.question('Press ENTER to pass.');
        passNumber++;
        currentPlayer = cpu;
      }
      else {
        //let move;
        while (true){
          move = readlineSync.question("What's your move?");
          if (rev.isValidMoveAlgebraicNotation(board, currentPlayer, move)){
            const rowcol = rev.algebraicToRowCol(move);
            board = rev.setBoardCell(board, currentPlayer, rowcol["row"], rowcol["col"]);
            const cellsToFlip = rev.getCellsToFlip(board, rowcol["row"], rowcol["col"]);
            board = rev.flipCells(board, cellsToFlip);
            console.log(rev.boardToString(board));
            console.log("Score\n====");
            const letterCounts = rev.getLetterCounts(board);
            console.log("X: " + letterCounts["X"]);
            console.log("O: " + letterCounts["O"]);
            readlineSync.question('Press ENTER to show computer\'s move...');
            currentPlayer = cpu;
            break;
          }
          else {
            console.log("INVALID MOVE. Your move should:\n* be in a  format\n* specify an existing empty cell\n* flip at least one of your oponent's pieces\n");
          }
        }
      }
    }
    else if (currentPlayer === cpu){
      const compValidMoves = rev.getValidMoves(board, currentPlayer);
      // if there are no valid moves for the computer to make then make it pass
      if (compValidMoves.length === 0){
        console.log("No valid moves available for computer, so passing");
        passNumber++;
        currentPlayer = yourChoice;
      }
      else {
        // randomly select a valid move from the comp_valid_moves 2-D array
        move = compValidMoves[Math.floor(Math.random() * compValidMoves.length)];
        board = rev.setBoardCell(board, currentPlayer, move[0], move[1]);
        const cellsToFlip = rev.getCellsToFlip(board, move[0], move[1]);
        board = rev.flipCells(board, cellsToFlip);
        console.log(rev.boardToString(board));
        console.log("Score\n====");
        const letterCounts = rev.getLetterCounts(board);
        console.log("X: " + letterCounts["X"]);
        console.log("O: " + letterCounts["O"]);
        currentPlayer = yourChoice;
      }
    }
  }
  // print out the results of the game
  const letterCount = rev.getLetterCounts(board);
  if (currentPlayer === yourChoice && currentPlayer === "X" && letterCount.X > letterCount.O){
    console.log("You won!");
  }
  else if (currentPlayer === yourChoice && currentPlayer === "O" && letterCount.O > letterCount.X){
    console.log("You won!");
  }
  else if (letterCount.X === letterCount.O) {
    console.log("Draw!");
  }
  else {
    console.log("You lost!");
  }
}
// otherwise, game with scripted moves BEGINS
else {
  fs.readFile(process.argv[2], 'utf8', function(err, data) {
   if (err) {
    console.log('ERROR READING FILE!', err);
   }
   else {
     const json = JSON.parse(data);
     let board = json.boardPreset.board;
     const yourChoice = json.boardPreset.playerLetter;
     const playerMoves = json.scriptedMoves.player;
     const compMoves = json.scriptedMoves.computer;
     let move;
     let manualMove;
     console.log("REVERSI\n");
     console.log("Computer will make the following moves: " + compMoves);
     console.log("The player will make the following moves: " + playerMoves);
     let currentPlayer = "";
     let cpu = "";
     if (yourChoice === "X"){
       currentPlayer = yourChoice;
       cpu = "O";
     }
     else {
       cpu = "X";
       currentPlayer = cpu;
     }
     console.log("Player is " + currentPlayer);
     console.log(rev.boardToString(board));
     let passNumber = 0;
     while (!rev.isBoardFull(board) || passNumber < 2){
       // check whose turn it is
       if (currentPlayer === yourChoice){
         // if there are no valid moves to make then tell the player to press <ENTER> to pass instead of allowing player to make a move
         if (rev.getValidMoves(board, currentPlayer).length === 0){
           console.log("No valid moves available for you.");
           readlineSync.question('Press ENTER to pass.');
           passNumber++;
           currentPlayer = cpu;
         }
         else {
           move = playerMoves.shift();
           if (move !== undefined){
             const rowColumn = rev.algebraicToRowCol(move);
             board = rev.setBoardCell(board, " ", rowColumn["row"], rowColumn["col"]);
           }
           //console.log(rev.boardToString(board));
           // if the next move is exhausted or the move is not a valid move, then give player option to manually choose a move
           if (move === undefined || !rev.isValidMoveAlgebraicNotation(board, currentPlayer, move)){
             // MANUAL LIKE NORMAL
             while (true){
               manualMove = readlineSync.question("What's your move?");
               if (rev.isValidMoveAlgebraicNotation(board, currentPlayer, manualMove)){
                 const rowcol = rev.algebraicToRowCol(manualMove);
                 board = rev.setBoardCell(board, currentPlayer, rowcol["row"], rowcol["col"]);
                 const cellsToFlip = rev.getCellsToFlip(board, rowcol["row"], rowcol["col"]);
                 board = rev.flipCells(board, cellsToFlip);
                 console.log(rev.boardToString(board));
                 console.log("Score\n====");
                 const letterCounts = rev.getLetterCounts(board);
                 console.log("X: " + letterCounts["X"]);
                 console.log("O: " + letterCounts["O"]);
                 readlineSync.question("\nPress ENTER to show computer's move...");
                 currentPlayer = cpu;
                 break;
               }
               else {
                 console.log("INVALID MOVE. Your move should:\n* be in a  format\n* specify an existing empty cell\n* flip at least one of your oponent's pieces\n");
               }
             }
           }
           else { // DO SCRIPTED MOVE
             console.log("Player move to " + move + " is scripted.");
             readlineSync.question("Press ENTER to continue.");
             const rowcol = rev.algebraicToRowCol(move);
             board = rev.setBoardCell(board, currentPlayer, rowcol["row"], rowcol["col"]);
             const cellsToFlip = rev.getCellsToFlip(board, rowcol["row"], rowcol["col"]);
             board = rev.flipCells(board, cellsToFlip);
             console.log(rev.boardToString(board));
             console.log("Score\n====");
             const letterCounts = rev.getLetterCounts(board);
             console.log("X: " + letterCounts["X"]);
             console.log("O: " + letterCounts["O"]);
             readlineSync.question('\nPress ENTER to show computer\'s move...');
             currentPlayer = cpu;
           }
         }
       }
       else if (currentPlayer === cpu){
         const compValidMoves = rev.getValidMoves(board, currentPlayer);
         // if there are no valid moves for the computer to make then make it pass
         if (compValidMoves.length === 0){
           console.log("No valid moves available for computer, so passing");
           passNumber++;
           currentPlayer = yourChoice;
         }
         else {
           move = compMoves.shift();
           // randomly select a valid move from the comp_valid_moves 2-D array
           if (move === undefined || !rev.isValidMoveAlgebraicNotation(board, currentPlayer, move)){
             manualMove = compValidMoves[Math.floor(Math.random() * compValidMoves.length)];
             board = rev.setBoardCell(board, currentPlayer, manualMove[0], manualMove[1]);
             const cellsToFlip = rev.getCellsToFlip(board, manualMove[0], manualMove[1]);
             board = rev.flipCells(board, cellsToFlip);
             console.log(rev.boardToString(board));
             console.log("Score\n====");
             const letterCounts = rev.getLetterCounts(board);
             console.log("X: " + letterCounts["X"]);
             console.log("O: " + letterCounts["O"]);
             currentPlayer = yourChoice;
           }
           else {
             console.log("Computer move to " + move + " was scripted.");
             const rowcol = rev.algebraicToRowCol(move);
             board = rev.setBoardCell(board, currentPlayer, rowcol["row"], rowcol["col"]);
             const cellsToFlip = rev.getCellsToFlip(board, rowcol["row"], rowcol["col"]);
             board = rev.flipCells(board, cellsToFlip);
             console.log(rev.boardToString(board));
             console.log("Score\n====");
             const letterCounts = rev.getLetterCounts(board);
             console.log("X: " + letterCounts["X"]);
             console.log("O: " + letterCounts["O"]);
             currentPlayer = yourChoice;
           }
         }
       }
     }
     // print out the results of the game
     const letterCount = rev.getLetterCounts(board);
     if (currentPlayer === yourChoice && currentPlayer === "X" && letterCount.X > letterCount.O){
       console.log("You won!");
     }
     else if (currentPlayer === yourChoice && currentPlayer === "O" && letterCount.O > letterCount.X){
       console.log("You won!");
     }
     else if (letterCount.X === letterCount.O) {
       console.log("Draw!");
     }
     else {
       console.log("You lost!");
     }
   }
  });
}
