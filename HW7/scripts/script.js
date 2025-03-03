var viewfinderArray = new Array();

class Viewfinder {
    constructor (imagePath, title, author, year, description) {
        this.imagePath = imagePath;
        this.title = title;
        this.description = description;
        this.author = author;
        this.year = year;
    }
    toString() {
        return this.imagePath + "Title: " + this.title + " " + "Author: " + this.author + " " + "Year: " + this.year
    }
}

function initializeArray() {
    var viewfinder = new Viewfinder("../HW7/images/madeInJapan.jpg", 
            "Made in Japan, Tadanori Yokoo, Having Reached a Climax at the Age of 29, I Was Dead",
            "Tadanori Yokoo",
            "1965",
            "Tadanori Yokoo’s Made in Japan... is a bold autobiographical print blending psychedelic pop art with traditional Japanese motifs. Featuring a dramatic self-portrait, rising sun, and bold typography, it explores themes of transformation, death, and rebirth, embodying Yokoo’s fusion of Eastern and Western visual culture."
            )
    var viewfinder1 = new Viewfinder("../HW7/images/cityDesign.jpg",
            "The City and Design, The Wonders of Life on Earth, Isamu Kurita",
            "Tadanori Yokoo",
            "1966",
            "Tadanori Yokoo’s The City and Design, The Wonders of Life on Earth, Isamu Kurita is a vibrant, collage-like print combining pop art, surrealism, and traditional Japanese imagery. With layered visuals, bold colors, and dynamic compositions, it reflects themes of urbanization, technology, and modern life’s complexities, showcasing Yokoo’s signature fusion of cultural influences."
            )
    var viewfinder2 = new Viewfinder("../HW7/images/asethetics.jpg",
            "Yukio Mishima, The Aesthetics of End",
            "Tadanori Yokoo",
            "1966",
            "Tadanori Yokoo’s Yukio Mishima, The Aesthetics of End is a striking visual tribute to the famed writer, blending bold colors, surreal imagery, and traditional Japanese motifs. Reflecting Mishima’s themes of beauty, death, and nationalism, the piece captures Yokoo’s signature mix of pop art and cultural symbolism."
        )
    var viewfinder3 = new Viewfinder("../HW7/images/america.jpg",
            "This Is America",
            "Tadanori Yokoo",
            "1968",
            "Tadanori Yokoo’s This is America is a bold, collage-like work that critiques American pop culture and consumerism. Blending psychedelic colors, surreal imagery, and graphic design elements, it reflects Yokoo’s fusion of Eastern and Western influences while offering a playful yet critical take on globalization and mass media."
        )
    var viewfinder4 = new Viewfinder("../HW7/images/newYork.jpg",
            "New York",
            "Tadanori Yokoo",
            "1968",
            "Tadanori Yokoo’s New York is a vibrant, psychedelic collage that captures the energy and chaos of the city. Blending pop art, surrealism, and traditional Japanese motifs, it reflects themes of urbanization, globalization, and cultural fusion, showcasing Yokoo’s bold and dynamic visual style."
        )
    viewfinderArray.push(viewfinder);
    viewfinderArray.push(viewfinder1);
    viewfinderArray.push(viewfinder2);
    viewfinderArray.push(viewfinder3);
    viewfinderArray.push(viewfinder4);
}

function showImage(){
    var randomNum = Math.floor(Math.random() * viewfinderArray.length);
    var selectedViewfinder = viewfinderArray[randomNum];
    document.getElementById("bodyImage").src = selectedViewfinder.imagePath;
    document.getElementById("imageDescription").innerHTML = 
        `${selectedViewfinder.title}<br>
         Author: ${selectedViewfinder.author} <br>
         Year: ${selectedViewfinder.year} <br>
         ${selectedViewfinder.description}`;
}