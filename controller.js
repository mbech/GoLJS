$( document ).ready( function(){
  board.zero();
  board.setAlive([1,3]);
  board.setAlive([2,3]);
  board.setAlive([3,3]);
  board.setAlive([3,2]);
  board.setAlive([2,1]);
  view.drawboard(board);
  initialBindings();
});

var view = {};

view.drawboard = function(board){
  $('#board-container').empty();
  for (var i = 0; i < board.height; i++) {
    $('#board-container').append("<div class='gol-row' id='row" + i + "'></div>");
    for (var j = 0; j<board.width; j++){
      squareId = i * board.width+ j;
      squareState = "dead";
      if (board.state[squareId] === 1) {
        squareState = "alive";
      }
      $('#row' + i).append("<div class='gol-square " + squareState + "' id='square" + squareId +"''></div>");
    }
  }
};



