$( document ).ready( function(){
  GOL.init();
});

var GOL = {
  init: function(){
    board.zero();
    board.populateDemo();
    view.refresh(board);
    initialBindings();
  }
};
