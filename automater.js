var automate = {
  active: false,
  timestep: 1000
};

automate.enable = function(){ 
  this.active = true; 
} 

automate.disable = function(){ 
  this.active = false; 
} 

automate.set_timestep = function(timestep){
  this.timestep = timestep;
}

automate.loop = function(){
  setTimeout(this.advance, this.timestep) 

}

automate.advance = function(){
  if (automate.active){
    board.nextState();
    view.drawboard(board);
    automate.loop();
  }
}
