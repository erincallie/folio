$(".close-this").on("click", function() {
  $(this).parent().removeClass("active").addClass("closed");
});

var sticky_init = function() {
  var sticky_obj = $(".dynamic-cta--sticky"),
      stick_to_top = $(".sticky--top"),
      stick_to_bottom = $(".sticky--bottom");
  sticky_obj.closest(".dnd-section").addClass("sticky-section");
  if (sticky_obj.is(stick_to_top)) {
    sticky_obj.closest(".dnd-section").addClass("sticky-section--top");
  } else if (sticky_obj.is(stick_to_bottom)) {
    sticky_obj.closest(".dnd-section").addClass("sticky-section--bottom");
  }
},
  trigger_cta = function() {
      var cta = $(".dynamic-cta"),
          trigger = cta.data("trigger");
      var makeActive = function() {
        if (!cta.is($(".closed"))) {
          if (cta.is($(".active"))) {
            cta.addClass("second-trigger");
          } else {
            cta.addClass("active");
          }
        }
      },
      onScrollPercent = function() {
        var scroll_percent = parseInt(cta.data("scroll")),
            scroll_height = $("#main-content").prop('scrollHeight'),
            scroll_pixels = scroll_percent/100*scroll_height;
            $(window).on("scroll", function() {
              var scroll_top = $(window).scrollTop();
              if (scroll_top > scroll_pixels) {
                makeActive();
              }
            });
          },
          onViewTime = function() {
            var time_on_page = cta.data("time");
            setTimeout(makeActive, time_on_page);
          };
    
      if (!cta.is($(".dynamic-cta--exit_intent"))) {
        if (trigger === "scroll") {
          onScrollPercent();
        } else if (trigger === "top") {
          onViewTime();
        } else if (trigger === "first") {
          onScrollPercent();
          onViewTime();
        }
      }
    },
    form_modal_init = function() {
      var section = $(".dynamic-cta"),
          button = section.find("a.open-form");
      button.on("click", function() {
        var target = $(this).data("target");
        $(target).addClass("active");
      });
    };

    form_modal_init();
    trigger_cta();
    sticky_init();

$(document).click(function() {
    var container = $(".dynamic-cta__form"),
        button = $(".open-form");
      if (!container.is(event.target) && !container.has(event.target).length && !button.is(event.target)) {
          container.removeClass("active");
      }
});

