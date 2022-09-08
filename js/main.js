(function () {
  // Polyfill for NodeList.prototype.forEach() in IE
  if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
      thisArg = thisArg || window;
      for (var i = 0; i < this.length; i++) {
        callback.call(thisArg, this[i], i, this);
      }
    };
  }

  // Variables
  var nav = document.querySelector('.header__navigation');
  var langSwitcher = document.querySelector('.header__language-switcher');
  var search = document.querySelector('.header__search');
  var allToggles = document.querySelectorAll('.header--toggle');
  var navToggle = document.querySelector('.header__navigation--toggle');
  var langToggle = document.querySelector('.header__language-switcher--toggle');
  var searchToggle = document.querySelector('.header__search--toggle');
  var closeToggle = document.querySelector('.header__close--toggle');
  var allElements = document.querySelectorAll(
    '.header--element, .header--toggle'
  );
  var emailGlobalUnsub = document.querySelector('input[name="globalunsub"]');

  // Functions

  // Function for executing code on document ready
  function domReady(callback) {
    if (['interactive', 'complete'].indexOf(document.readyState) >= 0) {
      callback();
    } else {
      document.addEventListener('DOMContentLoaded', callback);
    }
  }

  // Function for toggling mobile navigation
  function toggleNav() {
    allToggles.forEach(function (toggle) {
      toggle.classList.toggle('hide');
    });

    nav.classList.toggle('open');
    navToggle.classList.toggle('open');

    closeToggle.classList.toggle('show');
  }

  // Function for toggling mobile language selector
  function toggleLang() {
    allToggles.forEach(function (toggle) {
      toggle.classList.toggle('hide');
    });

    langSwitcher.classList.toggle('open');
    langToggle.classList.toggle('open');

    closeToggle.classList.toggle('show');
  }

  // Function for toggling mobile search field
  function toggleSearch() {
    allToggles.forEach(function (toggle) {
      toggle.classList.toggle('hide');
    });

    search.classList.toggle('open');
    searchToggle.classList.toggle('open');

    closeToggle.classList.toggle('show');
  }

  // Function for the header close option on mobile
  function closeAll() {
    allElements.forEach(function (element) {
      element.classList.remove('hide', 'open');
    });

    closeToggle.classList.remove('show');
  }

  // Function to disable the other checkbox inputs on the email subscription system page template
  function toggleDisabled() {
    var emailSubItem = document.querySelectorAll('#email-prefs-form .item');

    emailSubItem.forEach(function(item){
      var emailSubItemInput = item.querySelector('input');

      if (emailGlobalUnsub.checked) {
        item.classList.add('disabled');
        emailSubItemInput.setAttribute('disabled', 'disabled');
        emailSubItemInput.checked = false;
      } else {
        item.classList.remove('disabled');
        emailSubItemInput.removeAttribute('disabled');
      }
    });
  }

  // Execute JavaScript on document ready
  domReady(function () {
    if (!document.body) {
      return;
    } else {

      // Function dependent on language switcher
      if (langSwitcher) {
        langToggle.addEventListener('click', toggleLang);
      }

      // Function dependent on navigation
      if (navToggle) {
        navToggle.addEventListener('click', toggleNav);
      }

      // Function dependent on search field
      if (searchToggle) {
        searchToggle.addEventListener('click', toggleSearch);
      }

      // Function dependent on close toggle
      if (closeToggle) {
        closeToggle.addEventListener('click', closeAll);
      }

      // Function dependent on email unsubscribe from all input
      if (emailGlobalUnsub) {
        emailGlobalUnsub.addEventListener('change', toggleDisabled);
      }

    }
  });
  
  $(document).ready(function() {
        
      var animation_init = function(object) {
        var distance = object.data("distance"),
            duration = object.data("duration"),
            origin = object.data("origin"),
            scale = object.data("scale"),
            opacity = object.data("opacity"),
            delay = object.data("delay");
        ScrollReveal().reveal(object, {
          delay: delay,
          distance: distance,
          duration: duration,
          origin: origin,
          scale: scale,
          opacity: opacity,
          viewFactor : 0,
          mobile: true,
          reset: false,
          useDelay: 'onload',
          afterReveal: function(el) {
            ScrollReveal().clean(object);
          }
        });
      };

      var staggered_animation_init = function(object) {
        function multiply(a, b) {
          return a * b;
        }
        var block = object.find(".folio__blocks").children();
        var distance = object.data("distance"),
            duration = object.data("duration"),
            origin = object.data("origin"),
            scale = object.data("scale"),
            opacity = object.data("opacity"),
            delay = object.data("delay");
        if (delay < 1) {
          delay = 250;
        }
        block.each(function() {
          var index = $(this).index(),
              block_delay = multiply(delay, index);
          ScrollReveal().reveal($(this), {
            delay: block_delay,
            distance: distance,
            duration: duration,
            origin: origin,
            scale: scale,
            opacity: opacity,
            mobile: true,
            reset: false,
            viewFactor : 0,
            useDelay: 'onload',
            afterReveal: function(el) {
              ScrollReveal().clean(object);
            }
          });
        }); 
      };

      var scope = $(".folio");
      if (scope.length > 0 ) {
        $.each(scope, function(i) {
          var scope = $(this),
              objects = scope.find(".animate");
          if (objects.length > 0) {
            $.each(objects, function(i) {
              var object = $(this);
              if (object.is(".stagger-animation")) {
                staggered_animation_init(object);
              } else {
                animation_init(object);
              }
            });
          }
        });
        
      }
   
    var video_pop_init = function(video) {
      if (video.is(".video--iframe")) {
        video.magnificPopup({
          disableOn: 700,
          type: 'iframe',
          mainClass: 'mfp-fade',
          removalDelay: 160,
          preloader: true,
          fixedContentPos: false
        });
      } else if (video.is(".video--inline")) {
        video.magnificPopup({
          disableOn: 700,
          type: 'inline',
          src: '#video-popup',
          mainClass: 'mfp-fade',
          removalDelay: 160,
          preloader: true,
          fixedContentPos: false
        });
      } else if (video.is(".block__video")) {
        video.magnificPopup({
          disableOn: 700,
          type: 'iframe',
          mainClass: 'mfp-fade',
          removalDelay: 160,
          preloader: true,
          fixedContentPos: false
        });
      } else if (video.is(".block__video--wistia")) {
        video.magnificPopup({
          type: 'iframe',
          disableOn: 700,
          mainClass: 'mfp-fade',
          removalDelay: 160,
          preloader: true,
          fixedContentPos: false,
          iframe: {
            patterns: {
              wistia: {
                index: 'wistia.com',
                id: function(url) {        
                  var m = url.match(/^.+wistia.com\/(medias)\/([^_]+)[^#]*(#medias=([^_&]+))?/);
                  if (m !== null) {
                    if(m[4] !== undefined) {
                      return m[4];
                    }
                    return m[2];
                  }
                  return null;
                },
                src: '//fast.wistia.net/embed/iframe/%id%?autoPlay=1&muted=0&volume=1' // https://wistia.com/doc/embed-options#options_list
              }
            }
          }
        });
      }
    };
    var videos =  $(".popup-video");
    if (videos.length > 0) {
      $.each(videos, function(i) {
        video_pop_init($(this));
      });
    }
    
    /*var image = document.querySelectorAll('.parallax-background');
    var strength = document.getElementById("parallax-wrap").getAttribute('data-depth');
    if (image.length > 0) {
      new simpleParallax(image, {
        delay: 0,
        orientation: 'down',
        scale: strength,
        overflow: false
      });
    }*/
    
    


  });
                    
})();