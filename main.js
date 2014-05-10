$( document ).ready( function(){
  View.drawBoard(6)
})



var View = {
  drawBoard: function(gridSize){
    for (var i = 0; i < gridSize; i++) {
      $('#board-container').append("<div class='gol-row' id='row" + i + "'></div>")
      for (var j = 0; j<gridSize; j++){
        $('#row' + i).append("<div class='gol-square dead' id='square" + (i*gridSize + j) +"''></div>")
        console.log("adding to #row"+i)
      };
    };
  }
}