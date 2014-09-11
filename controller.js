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

}
