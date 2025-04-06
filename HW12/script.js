class Square {
    constructor(x, y, w, h, color = "#f1dd59") {  // Add color property with a default value
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.color = color;  // Store the color of the square
    }

    get theX() {
        return this.x;
    }

    get theY() {
        return this.y;
    }

    get theW() {
        return this.w;
    }

    get theH() {
        return this.h;
    }

    setX(x) {
        this.x = x;
    }

    setY(y) {
        this.y = y;
    }

    setColor(color) {
        this.color = color;  // Set the color of the square
    }

    getColor() {
        return this.color;  // Get the color of the square
    }
}

var objectValues1 = {
    "x": 100,
    "y": 10,
    "w": 50,
    "h": 50
};
var objectValues2 = {
    "x": 100,
    "y": 200,
    "w": 20,
    "h": 20
};

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = 20;
var y = 100;
var square3 = new Square(x, y, 30, 30); 
var group1 = []; 
var group2 = []; 
var score = 0;

function updateScore() {
    var scoreDisplay = document.getElementById("score");
    scoreDisplay.innerHTML = "Score: " + score;
}


// Create group1 squares
var currentX = objectValues1.x;
for (let i = 0; i < 5; i++) {
    group1.push(new Square(currentX, objectValues1.y, objectValues1.w, objectValues1.h));
    currentX += 70;
}

// Create group2 squares
var currentX2 = objectValues2.x;
for (let i = 0; i < 3; i++) {
    group2.push(new Square(currentX2, objectValues2.y, objectValues2.w, objectValues2.h));
    currentX2 += 70;
}

function drawSquare() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw group1 squares
    ctx.fillStyle = "#d50d0d";
    group1.forEach(sq => ctx.fillRect(sq.theX, sq.theY, sq.theW, sq.theH)); 

    // Draw group2 squares 
    group2.forEach(sq => {
        ctx.fillStyle = sq.getColor();
        ctx.fillRect(sq.theX, sq.theY, sq.theW, sq.theH);
    });

    // Update and draw moveable square (square3)
    square3.x = x;
    square3.y = y;
    ctx.fillStyle = "#3dac38";
    ctx.fillRect(square3.theX, square3.theY, square3.theW, square3.theH);
}

// Movement handling
$(document).ready(function () {
    $(this).keypress(function (event) {
        getKey(event);
    });
});

function getKey(event) {
    var didCollideWithGroup1 = hasCollidedWithGroup1();  // Check collision with group1 squares
    var collidedIndexGroup2 = hasCollidedWithGroup2();  // Check collision with group2 squares
    
    if (didCollideWithGroup1) {
        window.alert("You can't go that way");
    }
    else if (collidedIndexGroup2 !== -1) { 
        group2[collidedIndexGroup2].setColor("#ffffff");
        score += 1;
        updateScore();
    }
    var char = event.which || event.keyCode;
    var actualLetter = String.fromCharCode(char);
    if (actualLetter == "a") {
        x -= 5;
    }
    else if (actualLetter == "d") {
        x += 5;
    }
    else if (actualLetter == "s") {
        y += 5;
    }
    else if (actualLetter == "w") {
        y -= 5;
    }
    drawSquare();  // Redraw after movement
}

// Check if square3 collides with any square in group1
function hasCollidedWithGroup1() {
    for (let i = 0; i < group1.length; i++) {
        if (
            !(  // Checking for collision
                (square3.y + square3.h < group1[i].y) ||
                (square3.y > group1[i].y + group1[i].h) ||
                (square3.x + square3.w < group1[i].x) ||
                (square3.x > group1[i].x + group1[i].w)
            )
        ) {
            return true;  // Collision happened with one of the squares in group1
        }
    }
    return false;  // No collision
}

// Check if square3 collides with any square in group2 and return the index of the collided square
function hasCollidedWithGroup2() {
    for (let i = 0; i < group2.length; i++) {
        if (
            !(  // Checking for collision
                (square3.y + square3.h < group2[i].y) ||
                (square3.y > group2[i].y + group2[i].h) ||
                (square3.x + square3.w < group2[i].x) ||
                (square3.x > group2[i].x + group2[i].w)
            )
        ) {
            return i;  // Return the index of the collided square in group2
        }
    }
    return -1;  // No collision
}

drawSquare();
