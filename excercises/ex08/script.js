$(document).ready(function() {
  let movedLeft = false;
  $(".box").click(function() {
    if (!movedLeft) {
      $(".box").animate({
        left: "-90%",  
        width: "0%"   
      }, 775); 
      movedLeft = true;
    } else {
      
      $(".box").animate({
        left: "40%",    
        width: "40%"    
      }, 775);
      movedLeft = false;
    }
  });

  $(".box").hover(
    function() {
      $(".target").css("background-color", "limegreen");
    },
    function() {
      $(".target").css("background-color", "lightcoral");
    }
  );


  $(".box").dblclick(function() {
    $(".box").animate({
      left: "0",
      width: "auto"
    }, 600);
    movedLeft = false;
  });
});
