const bar_graph = document.getElementById('bar_graph');
var ctx = bar_graph.getContext('2d');

// draw square
let drawSquare = (x, y, width, height, fillStyle) => {
    ctx.fillStyle = fillStyle;
    ctx.fillRect(x, y, width, height);
  }
  drawSquare(30, 00, 80, 20, '#F00');
  drawSquare(30, 20, 30, 20, '#00E');
  drawSquare(30, 40, 120, 20, '#080');
   
  // draw rectangle outline
  let drawBox = () => {
    ctx.strokeStyle = "rgb(100, 200, 100)";
    ctx.strokeRect(50,10,50,30);
  }
//   drawBox();
   
  // draw triangle
  let drawTriangle = () => {
    ctx.fillStyle = "rgb(100, 180, 100)";
    ctx.beginPath();
    ctx.moveTo(150,10);
    ctx.lineTo(120,35);
    ctx.lineTo(150,60);
    ctx.fill();
  }
//   drawTriangle();
   
  // draw ellipse
  let drawCircle = () => {
    ctx.strokeStyle = "rgb(200, 100, 100)";
    ctx.beginPath();
    ctx.ellipse(200, 40, 30, 30, 0, 0, 2 * Math.PI);
    ctx.stroke();  
  }
//   drawCircle();