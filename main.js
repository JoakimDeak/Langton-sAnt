//setting up the canvas
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.height = 1000;
canvas.width = 1000;

g = new Grid(100, canvas.width);// creating the grid which in turn creates the ant

//animation loop
requestAnimationFrame(draw);
function draw(){
    g.show(ctx); // renders everything
    g.update();

    requestAnimationFrame(draw);
}
