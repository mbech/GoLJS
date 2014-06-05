$( document ).ready( function(){
  Board.zero();
  Board.setAlive([1,2])
  Board.setAlive([2,2])
  Board.setAlive([3,2])
  View.drawBoard(Board)
})

var View = {
  drawBoard: function(board){
    for (var i = 0; i < board.width; i++) {
      $('#board-container').append("<div class='gol-row' id='row" + i + "'></div>")
      for (var j = 0; j<board.height; j++){
        squareId = i * board.width + j
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
  width: 10,
  height: 10,
  state: Array(100),

  setAlive: function(coord){
      this.state[coord[0]*this.height + coord[1]] = 1;
  },

  setDead: function(coord){
      this.state[coord[0]*this.height+ coord[1]] = 0;
  },

  zero: function(){
    for (var i = 0; i < this.state.length; i++){
    this.state[i] = 0;
    }
  },

  initRandom: function(){

  }
}