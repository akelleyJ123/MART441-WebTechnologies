(function($) {
    $.fn.styleData = function() {
        this.css("background-color", "blue");
        this.css("color", "white");
        this.css("font-size", "150%");
        this.css("font-weight", "bold");
        this.css("padding", "1%")
        return this;
    };
}(jQuery));

$("button").click(function(){
    $.getJSON("iss_data.json", function(result){
        $("div").html("");
        $.each(result.iss_position, function(key, value){
            $("div").append(key + ": " + value + "<br>");
        });
        $("div").styleData();
    });
});