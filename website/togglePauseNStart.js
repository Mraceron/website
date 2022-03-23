this.togglePause = function(){
    if (document.getElementById("robotVideo").paused) {
      document.getElementById("robotVideo").play();
    }
    else {
      document.getElementById("robotVideo").pause();
    }
  }
