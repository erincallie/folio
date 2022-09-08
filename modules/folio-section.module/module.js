$(document).ready(function() {
  var handle_modal_form = function() {
    var open = $(".open-form"),
        close = $(".close-form");
    open.click(function() {
      $(this).closest(".scope__cta").find(".form--modal").addClass("active");
    });
    close.click(function() {
      $(this).parent().removeClass("active");
    });
  };
  handle_modal_form();
});