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
    for (var i = 0, l = Board.state.length; i < l; i ++) {
      if (Math.random() >= 0.5){
        Board.state[i] = 1;
      } else {
        Board.state[i] = 0; 
      }
    }
  },

  nextState: function(){
    //Iterate over cells and figure out the next board state
  }
};

var getState = function (cell_loc){
  return Board.state[(cell_loc[0]*Board.height + cell_loc[1])];
};

var nextCellState = function (cell_loc){
  //return next state of passed-in cell
  //ASSUMES BORDERS (FIRST CELL BEYOND GRID) ARE ALL LIVE CELLS
  var neighbors = [0,0,0,0,0,0,0,0]; //top, right, bottom, left, t-r, b-r, b-l, t-l
  //top neighbor check
  if(cell_loc[0] === 0 || getState([(cell_loc[0] - 1), cell_loc[1]]) === 1){
    neighbors[0] = 1;
  }
  //right neighbor check
  if(cell_loc[1] === (Board.width - 1) || getState([cell_loc[0], (cell_loc[1] + 1)]) === 1){
    neighbors[1] = 1;
  }
  //bottom neighbor check
  if(cell_loc[0] === (Board.height - 1) || getState([(cell_loc[0] + 1), cell_loc[1]]) === 1){
    neighbors[2] = 1;
  }
  //left neighbor check
  if(cell_loc[1] === 0 || getState([cell_loc[0], (cell_loc[1] - 1)]) === 1){
    neighbors[3] = 1;
  }

  //top-right neighbor check
  if(cell_loc[0] === 0 || cell_loc[1] === (Board.width - 1) || getState([(cell_loc[0] - 1), (cell_loc[1] + 1)]) === 1){
    neighbors[4] = 1;
  }
  //bottom-right neighbor check
  if(cell_loc[1] === (Board.width - 1) || cell_loc[0] === (Board.height - 1) || getState([(cell_loc[0] - 1), (cell_loc[1] + 1)]) === 1){
    neighbors[5] = 1;
  }
  //bottom-left neighbor check
  if(cell_loc[1] === 0 || cell_loc[0] === (Board.height - 1) || getState([(cell_loc[0] - 1), (cell_loc[1] - 1)]) === 1){
    neighbors[6] = 1;
  }
  //top-left neighbor check
  if(cell_loc[0] === 0 || cell_loc[1] === 0 || getState([(cell_loc[0] - 1), (cell_loc[1] - 1)]) === 1){
    neighbors[7] = 1;
  }

  var total_live_neighbors = neighbors.reduce(function(a, b) { return a + b; });
  //Rules are as follows for next state:
  //Any live cell with fewer than two live neighbours dies, as if caused by under-population.
  //Any live cell with more than three live neighbours dies, as if by overcrowding.
  if(total_live_neighbors < 2 || total_live_neighbors > 3){return 0;}
  //Any live cell with two or three live neighbours lives on to the next generation.
  //Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
  if(total_live_neighbors === 2 || total_live_neighbors === 3){return 1;}
}; 
