const bar_graph = document.getElementById('bar_graph');

let ctx;

// draw text
let drawText = (canvas, font, text, x, y) => {
  ctx = canvas.getContext('2d');
  ctx.fillStyle = '#CFD';
  ctx.font = font;
  ctx.fillText(text, x, y);
}

// draw square
let drawSquare = (canvas, x, y, width, height, fillStyle) => {
  ctx = canvas.getContext('2d');
  ctx.fillStyle = fillStyle;
  ctx.fillRect(x, y, width, height);
  }
  drawText(bar_graph, '1.0em IBM Plex Serif', 'Positive Comments', 150, 15,);
  drawSquare(bar_graph, 150, 40, 80, 20, '#F00');
  drawText(bar_graph, '1.0em IBM Plex Serif', 'Leading Brand: ', 30, 55,);
  drawSquare(bar_graph, 150, 60, 30, 20, '#00E');
  drawText(bar_graph, '1.0em IBM Plex Serif', 'Other Brands: ', 30, 75,);
  drawSquare(bar_graph, 150, 80, 120, 20, '#080');
  drawText(bar_graph, '1.0em IBM Plex Serif', 'Four Star: ', 30, 95,);
   
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