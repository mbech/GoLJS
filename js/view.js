var view = {};

view.drawBoard = function(board){
  $('#board-container').empty();
  for (var i = 0; i < board.height; i++) {
    $('#board-container').append("<div class='gol-row' id='row" + i + "'></div>");
    for (var j = 0; j<board.width; j++){
      squareId = i * board.width+ j;
      squareState = "dead";
      if (board.state[squareId] === 1) {
        squareState = "alive";
      }
      $('#row' + i).append("<div class='gol-square " + squareState + "' data-loc='" + squareId +"''></div>");
    }
  }
};


