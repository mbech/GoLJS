$( document ).ready( function(){
  board.zero();
  board.setAlive([1,2]);
  board.setAlive([2,2]);
  board.setAlive([3,2]);
  view.drawboard(board);
  window.onclick = function(){
    board.nextState();
    view.drawboard(board);
  };
});

var view = {};

view.drawboard = function(board){
  $('#board-container').empty();
  for (var i = 0; i < board.width; i++) {
    $('#board-container').append("<div class='gol-row' id='row" + i + "'></div>");
    for (var j = 0; j<board.height; j++){
      squareId = i * board.width + j;
      squareState = "dead";
      if (board.state[squareId] === 1) {
        squareState = "alive";
      }
      $('#row' + i).append("<div class='gol-square " + squareState + "' id='square" + squareId +"''></div>");
    }
  }
}



