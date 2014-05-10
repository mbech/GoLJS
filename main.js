$( document ).ready( function(){
  var gridSize = $('.gol-row').length;
  $( '.gol-row' ).each( function( index, element ){
    for (var i = 0; i<gridSize; i++){
      $(element).append("<div class='gol-square dead'></div>")
      console.log("index is: " + index + ", col is: " + i)
    };
  });
})