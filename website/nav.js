function navFunction() {
    let x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
    let y = document.getElementById("rob");
    if (y.className === "text-robot") {
      y.className += " responsive";
    } else {
      y.className = "text-robot";
    }
 
  }
