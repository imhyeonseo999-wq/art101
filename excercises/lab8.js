// 6. Click
$("#creature").click(function() {
  $("#status").text("You clicked me! 🐾");
  $("#creature").css("background", "lavender");
});

// 7. Hover
$("#creature").hover(
  function() { $("#status").text("You’re close... 👀"); },
  function() { $("#status").text("You left me :("); }
);

// 8. Double Click
$("#creature").dblclick(function() {
  $("#status").text("You woke me up!! 😳");
  $("#creature").css("transform", "scale(1.2)");
});

// 9. Keypress
$(document).keydown(function(event) {
  $("#status").text("You pressed: " + event.key);
});

// 10. Mouse Move
$(document).mousemove(function(event) {
  $("#creature").css({
    left: event.pageX - 60,
    top: event.pageY - 60,
    position: "absolute"
  });
});
