var imageNum = ["image0","image1","image2","image3","image4","image5","image6","image7","image8","image9","image10","image11"];
var blankImg = "../images/Record.png";
var realImages = new Array();
var numberOne = -1;
var numberTwo = -1;
var getPlayerInfo = {"firstName":"", "lastName":"", "age":"", "attempts":""};
var attemptNum = 0;
var gameStats = {"attempts": 0};

function showBlankImg() {
    randomImageArray();
    for(var i = 0; i < imageNum.length; i++){
        document.getElementById(imageNum[i]).src = blankImg;
    }
}
function randomImageArray(){
    var realImageArray = ["../images/american.png","../images/by_and_by.png","../images/cuttin.png","../images/hopeful.png","../images/purgatory.png","../images/universe.png"];
    var count = new Array(realImageArray.length).fill(0);
    while(realImages.length < 12){
        var randomNumber = Math.floor(Math.random() * realImageArray.length)
        if (count[randomNumber] < 2){
            realImages.push(realImageArray[randomNumber]);
            count[randomNumber] = count[randomNumber] + 1;
        }
    }
}
function flipImage(number){
   if (numberOne >= 0) {
    numberTwo = number;
    document.getElementById(imageNum[number]).src = realImages[numberTwo];
    attemptNum++;
    var storedPlayerInfo = JSON.parse(localStorage.getItem("playerInfo"));
    storedPlayerInfo.attempts = attemptNum;
    localStorage.setItem("playerInfo", JSON.stringify(storedPlayerInfo));
   }
   else if (numberTwo < 0) {
    numberOne = number;
    document.getElementById(imageNum[numberOne]).src = realImages[numberOne];
   }

   if (realImages[numberTwo] != realImages[numberOne] && numberOne >= 0 && numberTwo >= 0) {
    setTimeout(clearImages, 1000);
   }
   else if (realImages[numberTwo] == realImages[numberOne] && numberOne >= 0 && numberTwo >= 0) {
    numberOne = -1
    numberTwo = -1
   }
}

function clearImages() {
    console.log (numberOne);
    document.getElementById(imageNum[numberOne]).src = blankImg;
    document.getElementById(imageNum[numberTwo]).src = blankImg;
    numberOne = -1;
    numberTwo = -1;
}

function getResponse() {
    var firstName = document.getElementById("firstNameResponse").value;
    var lastName = document.getElementById("lastNameResponse").value;
    var age = document.getElementById("ageResponse").value;
    getPlayerInfo.firstName = firstName;
    getPlayerInfo.lastName = lastName;
    getPlayerInfo.age = age;
    getPlayerInfo.attempts = attemptNum;
    localStorage.setItem("playerInfo", JSON.stringify(getPlayerInfo));
    window.location = "../HW6/pages/gamePage.html";
}

function showResults() {
    var playerResults = JSON.parse(localStorage.getItem("playerInfo"));
    var playerInfoText = "<p>Player: " + playerResults.firstName + " " + playerResults.lastName + "</p>" +
                         "<p>Age: " + playerResults.age + "</p>" + 
                         "<p>Attempts: " + playerResults.attempts + "</p>";
    document.getElementById("showResults").innerHTML = playerInfoText;
}

window.onload = showBlankImg;