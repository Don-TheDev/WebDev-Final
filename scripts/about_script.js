const leading_graph = document.getElementById('leading_graph');
const other_graph = document.getElementById('other_graph');
const four_star_graph = document.getElementById('four_star_graph');

// draw square
let drawSquare = (canvas, x, y, width, height, fillStyle) => {
  ctx = canvas.getContext('2d');
  ctx.fillStyle = fillStyle;
  ctx.fillRect(x, y, width, height);
  }
  drawSquare(leading_graph, 30, 00, 80, 20, '#F00');
  drawSquare(other_graph, 30, 00, 30, 20, '#00E');
  drawSquare(four_star_graph, 30, 00, 120, 20, '#080');
   
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