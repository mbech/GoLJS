var automate = {
  active: false,
  timestep: 500,

  enable: function(){ 
    this.active = true; 
  },

  disable: function(){ 
    this.active = false; 
  }, 

  set_timestep: function(timestep){
    this.timestep = timestep;
  },

  loop: function(){
    setTimeout(this.advance, this.timestep);
  },

  advance: function(){
    if (automate.active){
      board.nextState();
      view.refresh(board);
      automate.loop();
    }
  }
};
