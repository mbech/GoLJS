var view = {

  refresh: function(board){
    this.drawBoard(board);
    this.drawStats(board);
  },

  drawBoard: function(board){
    var $boardContainer = $('#board-container');
    var $boardParent = $boardContainer.parent();
    //detach to reduce slow DOM manipulation, reattach at end
    $boardContainer.detach().empty();
    for (var i = 0; i < board.height; i++) {
      $boardContainer.append("<div class='gol-row' id='row" + i + "'></div>");
      for (var j = 0; j < board.width; j++){
        squareId = i * board.width+ j;
        squareState = "dead";
        if (board.state[squareId] === 1) {
          squareState = "alive";
        }
        $boardContainer.find('#row' + i).append("<div class='gol-square " + squareState + "' data-loc='" + squareId +"''></div>");
      }
    }
    $boardParent.prepend($boardContainer);
  },

  drawStats: function(board){
    board.updatePopulation();
    $('#board-age').text("Age: " + board.age); 
    $('#board-population').text("Population: " + board.population); 
  }
};
