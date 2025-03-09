$(document).ready(function () {
    let images = ["../HW8/images/universe.png", "../HW8/images/grass.png"]; // Array of images
    let index = 0; // Start at the first image
    let text = ["Words", "More Words"];
    let textIndex = 0;
    let shape = ["../HW8/images/square.png", "../HW8/images/circle.png"];
    let shapeIndex = 0;

    function fadeImages() {
        $(".images").fadeOut(1000, function () { // Fade out over 1 second
            index = (index + 1) % images.length; // Toggle between 0 and 1
            $(this).attr("src", images[index]).fadeIn(1000);// Change image and fade in over 1 second
        });
    }
    function moveImages() {
        $(".images").stop(true,true).animate({left: "400px"}, 1000).animate({left: "-400px"}, 1000);
    }

    function changeText() {
        $("h2").fadeOut(1000, function () {
            textIndex = (textIndex + 1) % text.length;
            $(this).text(text[textIndex]).fadeIn(1000);
        });
    }

    function moveText() {
        $("h2").stop(true,true).animate({fontSize: "300%"},1000).animate({fontSize: "200%"}, 1000);
    }
    
    function fadeShapes() {
        $(".shapes").fadeOut(1000, function () { // Fade out over 1 second
            shapeIndex = (shapeIndex + 1) % shape.length; // Toggle between 0 and 1
            $(this).attr("src", shape[shapeIndex]).fadeIn(1000);// Change image and fade in over 1 second
        });
    }

    setInterval(changeText, 3000);
    setInterval(moveImages, 3000);
    setInterval(fadeImages, 3000);
    setInterval(moveText, 3000);
    setInterval(fadeShapes, 3000);
});    