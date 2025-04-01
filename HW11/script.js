class square{
    constructor(x, y, height, width, color) {
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.color = color;
    }
    setX(x)
    {
       this.x = x;
    }
    setY(y)
    {
       this.y = y;
    }
    setHeight(height)
    {
       this.height = height;
    }
    setWidth(width)
    {
       this.width = width;
    }
    setColor(color)
    {
        this.color = color;
    }
    get theX()
    {
        return this.x;
    }
    get theY()
    {
        return this.y;
    }
    get theHeight()
    {
        return this.height;
    }
    get theWidth()
    {
        return this.width;
    }
    get theColor()
    {
        return this.color;
    }
}
var canvas = document.getElementById("theCanvas");
var ctx = canvas.getContext("2d");
var x = 50;
var y = 50;
var x2 = 50;
var y2 = 200;
var atEdge = false;
setInterval(update, 1000/60);
drawSquare();

function drawSquare() {
    ctx.clearRect(0, 0, 800, 600);
    var square1 = new square(x,y,50,50,"red");
    ctx.fillStyle = square1.theColor;
    ctx.fillRect(square1.theX,square1.theY,square1.theWidth,square1.theHeight);
    var square2 = new square(x2,y2,200,200,"green");
    ctx.fillStyle = square2.theColor;
    ctx.fillRect(square2.theX,square2.theY,square2.theWidth,square2.theHeight);
}

function update() {
    drawSquare();
    if ()
}

