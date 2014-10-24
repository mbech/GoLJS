$( document ).ready( function(){
  board.zero();
  board.setAlive([1,3]);
  board.setAlive([2,3]);
  board.setAlive([3,3]);
  board.setAlive([3,2]);
  board.setAlive([2,1]);
  view.refresh(board);
  initialBindings();
});
