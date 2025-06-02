$(document).ready(function(){
  var rocket = $('#rocket');

    function bergerak(){
      rocket.animate({"top":"-300px", "left":"1000px", "width":"350px"}, 3000 , function(){
        rocket.css({
          "top"   : "700px",
          "left"  : "-300px",
          "width" : "35px",
          "z-index" : "-1"
        });
        bergerak();
      });
    }
    bergerak();
});