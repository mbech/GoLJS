var Board = {
  width: 10,
  height: 10,
  state: Array(100),

  setAlive: function(coord){
      this.state[coord[0]*this.height + coord[1]] = 1;
  },

  setDead: function(coord){
      this.state[coord[0]*this.height+ coord[1]] = 0;
  },

  zero: function(){
    for (var i = 0; i < this.state.length; i++){
    this.state[i] = 0;
    }
  },

  populateRandom: function(){

  },

  nextState: function(){
    //Iterate over cells and figure out the next board state
  }
}

function nextCellState(cell_loc){
  //return next state of passed-in cell
  //Rules are as follows for next state:
    //Any live cell with fewer than two live neighbours dies, as if caused by under-population.
    //Any live cell with two or three live neighbours lives on to the next generation.
    //Any live cell with more than three live neighbours dies, as if by overcrowding.
    //Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
  var neightbors = [];

}
  
