var initialBindings = function(){
  $('#advance-board').on('click', function(){
    board.nextState();
    view.drawBoard(board);
  });

  $('#reset-board').on('click', function(){
    board.zero();
    view.drawBoard(board);
  });

  $('#randomize-board').on('click', function(){
    board.populateRandom();
    view.drawBoard(board);
  });

  $('#automate-board').on('click', function(){
    if(automate.active){
      $(this).text("Auto-advance");
      automate.disable();
    }else{
      $(this).text("Pause");
      automate.enable();
      automate.advance();
    }
  });

  $( document ).on('click', '.gol-square', function(){
    var $clicked_cell = $(this);
    var cell_loc = $clicked_cell.data("loc");
    if ($clicked_cell.hasClass("alive")){
      board.setDead(cell_loc);
    }else{
      board.setAlive(cell_loc);
    }
    view.drawBoard(board); 
  });

};
