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
  drawText(bar_graph, '1.0em IBM Plex Serif', 'Positive Reviews', 250, 15,);
  for (i = 0; i <= 1200; i += 240) {
  drawText(bar_graph, '1.0em IBM Plex Serif', i, (i/6 + 150), 35,);
}
  drawSquare(bar_graph, 150, 40, 100, 20, '#F00');
  drawSquare(bar_graph, 150, 60, 135, 20, '#00E');
  drawSquare(bar_graph, 150, 80, 175, 20, '#080');
  drawText(bar_graph, '1.0em IBM Plex Serif', 'Leading Brand: ', 00, 75,);
  drawText(bar_graph, '1.0em IBM Plex Serif', '2018', 110, 55,);
  drawText(bar_graph, '1.0em IBM Plex Serif', '2019', 110, 75,);
  drawText(bar_graph, '1.0em IBM Plex Serif', '2020', 110, 95,);
  drawSquare(bar_graph, 150, 130, 85, 20, '#F00');
  drawSquare(bar_graph, 150, 150, 75, 20, '#00E');
  drawSquare(bar_graph, 150, 170, 115, 20, '#080');
  drawText(bar_graph, '1.0em IBM Plex Serif', 'Other Brands: ', 00, 165,);
  drawText(bar_graph, '1.0em IBM Plex Serif', '2018', 110, 145,);
  drawText(bar_graph, '1.0em IBM Plex Serif', '2019', 110, 165,);
  drawText(bar_graph, '1.0em IBM Plex Serif', '2020', 110, 185,);
  drawSquare(bar_graph, 150, 220, 80, 20, '#F00');
  drawSquare(bar_graph, 150, 240, 125, 20, '#00E');
  drawSquare(bar_graph, 150, 260, 225, 20, '#080');
  drawText(bar_graph, '1.0em IBM Plex Serif', 'Four Star: ', 00, 255,);
  drawText(bar_graph, '1.0em IBM Plex Serif', '2018', 110, 235,);
  drawText(bar_graph, '1.0em IBM Plex Serif', '2019', 110, 255,);
  drawText(bar_graph, '1.0em IBM Plex Serif', '2020', 110, 275,);
   
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