var initialBindings = function(){
  $('#advance-board').on('click', function(){
    board.nextState();
    view.drawboard(board);
  });

  $('#reset-board').on('click', function(){
    board.zero();
    view.drawboard(board);
  });

  $('#randomize-board').on('click', function(){
    board.populateRandom();
    view.drawboard(board);
  });

  $('#automate-board').on('click', function(){
    automate.enable();
    automate.advance();
  });

}
