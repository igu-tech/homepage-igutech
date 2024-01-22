// Preloader js
/*global $*/
$(window).on("load", function () {
  "use strict";
  let searchParams = new URLSearchParams(window.location.search);
  let language = searchParams.get('lang') || window.navigator.language.substring(0,2);
  if (language === 'en') {
    $('.de').hide();
    $('.en').show();
  } else {
    $('.en').hide();
    $('.de').show();
  }
  $(".preloader").fadeOut(0);
  if (window.location.href === 'https://www.igutech.com/build/index.html?lang=en') {
    document.head.innerHTML += '<link rel="canonical" href="https://www.igutech.com/build/index.html" />';
  }
  if (window.location.href === 'https://www.igutech.com/build/about-franz-gusenbauer.html?lang=en') {
    document.head.innerHTML += '<link rel="canonical" href="https://www.igutech.com/build/about-franz-gusenbauer.html" />';
  }
});

(function ($) {
  "use strict";

  // tab
  $(".tab-content")
    .find(".tab-pane")
    .each(function (idx, item) {
      var navTabs = $(this).closest(".code-tabs").find(".nav-tabs"),
        title = $(this).attr("title");
      navTabs.append(
        '<li class="nav-item"><a class="nav-link" href="#">' +
          title +
          "</a></li>"
      );
    });

  $(".code-tabs ul.nav-tabs").each(function () {
    $(this).find("li:first").addClass("active");
  });

  $(".code-tabs .tab-content").each(function () {
    $(this).find("div:first").addClass("active");
  });

  $(".nav-tabs a").click(function (e) {
    e.preventDefault();
    var tab = $(this).parent(),
      tabIndex = tab.index(),
      tabPanel = $(this).closest(".code-tabs"),
      tabPane = tabPanel.find(".tab-pane").eq(tabIndex);
    tabPanel.find(".active").removeClass("active");
    tab.addClass("active");
    tabPane.addClass("active");
  });

  // accordion-collapse
  $(".accordion-collapse").on("show.bs.collapse", function () {
    $(this).siblings(".accordion-header").addClass("active");
  });
  $(".accordion-collapse").on("hide.bs.collapse", function () {
    $(this).siblings(".accordion-header").removeClass("active");
  });

  //post slider
  $(".post-slider").slick({
    slidesToShow: 1,
    lazyLoad: 'ondemand',
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    prevArrow:
      '<button type="button" class="prevArrow"><i class="fas fa-angle-left"></i></button>',
    nextArrow:
      '<button type="button" class="nextArrow"><i class="fas fa-angle-right"></i></button>',
  });
  
  const galleries = document.querySelectorAll('.fullscreen-slick');
  galleries.forEach(gallery => {
    gallery.addEventListener('click', function(e) {
      if (!document.fullscreenElement && e.target.classList[0] === 'slick-slide') {
        e.currentTarget.requestFullscreen().catch(err => {
          alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
        });
      } 
    });
  });
 

  // videoPopupInit
  function videoPopupInit() {
    var $videoSrc;
    $(".video-play-btn").click(function () {
      $videoSrc = $(this).data("src");
    });
    $("#videoModal").on("shown.bs.modal", function (e) {
      $("#showVideo").attr(
        "src",
        $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0"
      );
    });
    $("#videoModal").on("hide.bs.modal", function (e) {
      $("#showVideo").attr("src", $videoSrc);
    });
  }
  videoPopupInit();

  // table of content
  new ScrollMenu("#TableOfContents a", {
    duration: 400,
    activeOffset: 40,
    scrollOffset: 10,
  });
})(jQuery);
