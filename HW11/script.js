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
var greenEdge = false;
var square1;
var square2;
setInterval(update, 1000/60);
drawSquare();
function drawSquare() {
    ctx.clearRect(0, 0, 800, 600);
    
    square1 = new square(x, y, 50, 50, "red");
    ctx.fillStyle = square1.theColor;
    ctx.fillRect(square1.theX, square1.theY, square1.theWidth, square1.theHeight);
    
    square2 = new square(x2, y2, 200, 200, "green");
    ctx.fillStyle = square2.theColor;
    ctx.fillRect(square2.theX, square2.theY, square2.theWidth, square2.theHeight);
}

$(document).ready(function(){
    $(this).keypress(function(event){
        getKey(event);
    });
});

function getKey(event)
{
    var didCollide = hasCollided(square1, square2);
    if(didCollide)
      {
        canvas.style.backgroundColor = "yellow";
      }
    var char = event.which || event.keyCode;
    var actualLetter = String.fromCharCode(char);
if(actualLetter == "w")
    {
        moveUp();
    }
 else if(actualLetter == "s")
    {
        moveDown();
    }
 else if(actualLetter == "d")
    {
        moveRight();
    }
 else if(actualLetter == "a")
    {
        moveLeft();
    }
    drawSquare();
}

function moveUp()
{
    y-=10;
}

function moveDown()
{
    y+=10;
}
function moveLeft()
{
    x-=10;
}
function moveRight()
{
    x+=10;
}

function update() {
    drawSquare();
    greenAtEdge();
    if (greenEdge==false ) {
        x2+=3
    }
    else {
        x2-=3
    }
}
function greenAtEdge() {
    if (x2 >= 600) {
        greenEdge = true;
    } else if (x2 <= 0) {
        greenEdge = false;
    }
}
function hasCollided(object1, object2) {
    return !(
        ((object1.y + object1.height) < (object2.y)) ||
        (object1.y > (object2.y + object2.height)) ||
        ((object1.x + object1.width) < object2.x) ||
        (object1.x > (object2.x + object2.width))
    );
}