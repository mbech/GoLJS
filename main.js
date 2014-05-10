$( document ).ready( function(){
  Board.zero(Board.state);
  Board.setAlive(Board.state, [7,12,17])
  View.drawBoard(Board)
})

var View = {
  drawBoard: function(board){
    for (var i = 0; i < board.size; i++) {
      $('#board-container').append("<div class='gol-row' id='row" + i + "'></div>")
      for (var j = 0; j<board.size; j++){
        squareId = i * board.size + j
        squareState = "dead"
        if (board.state[squareId] === 1) {
          squareState = "alive"
        };
        $('#row' + i).append("<div class='gol-square " + squareState + "' id='square" + squareId +"''></div>")
      };
    };
  }
}

var Board = {
  size: 10,
  state: Array(this.size^2),

  setAlive: function(stateArray, indexArray){
    for (var i = 0; i < indexArray.length; i++) {
      stateArray[indexArray[i]] = 1;
    };
  },

  setDead: function(stateArray, indexArray){
    for (var i = 0; i < indexArray.length; i++) {
      stateArray[indexArray[i]] = 0;
    };
  },

  zero: function(stateArray){
    for (var i = 0; i < stateArray.length; i++){
    stateArray[i] = 0;
    }
  }
}