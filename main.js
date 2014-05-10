$( document ).ready( function(){
  testGridSize = 5
  testArray = Array(testGridSize^2)
  for (var i = 0; i < testArray.length; i++){
    testArray[i] = 0;
  }
  testArray[7], testArray[11], testArray[12], testArray[13], testArray[17] = 1
  console.log(testArray)
  View.drawBoard(testGridSize, testArray)
})

var View = {
  drawBoard: function(gridSize, stateArray){
    for (var i = 0; i < gridSize; i++) {
      $('#board-container').append("<div class='gol-row' id='row" + i + "'></div>")
      for (var j = 0; j<gridSize; j++){
        squareId = i * gridSize + j
        squareState = "dead"
        if (stateArray[squareId] === 1) {
          squareState = "alive"
        };
        $('#row' + i).append("<div class='gol-square " + squareState + "' id='square" + squareId +"''></div>")
      };
    };
  }
}

