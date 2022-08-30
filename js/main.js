jQuery(document).ready(function($) {
  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn("slow")
    } else {
      $(".back-to-top").fadeOut("slow")
    }
  })
  $(".back-to-top").click(function() {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo")
    return false
  })

  // Initiate the wowjs animation library
  new WOW().init()

  // Initiate superfish on nav menu
  $(".nav-menu").superfish({
    animation: {
      opacity: "show"
    },
    speed: 400
  })

  // Mobile Navigation
  if ($("#nav-menu-container").length) {
    var $mobile_nav = $("#nav-menu-container")
      .clone()
      .prop({
        id: "mobile-nav"
      })
    $mobile_nav.find("> ul").attr({
      class: "",
      id: ""
    })
    $("body").append($mobile_nav)
    $("body").prepend(
      '<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>'
    )
    $("body").append('<div id="mobile-body-overly"></div>')
    $("#mobile-nav")
      .find(".menu-has-children")
      .prepend('<i class="fa fa-chevron-down"></i>')

    $(document).on("click", ".menu-has-children i", function(e) {
      $(this)
        .next()
        .toggleClass("menu-item-active")
      $(this)
        .nextAll("ul")
        .eq(0)
        .slideToggle()
      $(this).toggleClass("fa-chevron-up fa-chevron-down")
    })

    $(document).on("click", "#mobile-nav-toggle", function(e) {
      $("body").toggleClass("mobile-nav-active")
      $("#mobile-nav-toggle i").toggleClass("fa-times fa-bars")
      $("#mobile-body-overly").toggle()
    })

    $(document).click(function(e) {
      var container = $("#mobile-nav, #mobile-nav-toggle")
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($("body").hasClass("mobile-nav-active")) {
          $("body").removeClass("mobile-nav-active")
          $("#mobile-nav-toggle i").toggleClass("fa-times fa-bars")
          $("#mobile-body-overly").fadeOut()
        }
      }
    })
  } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
    $("#mobile-nav, #mobile-nav-toggle").hide()
  }

  // Smooth scroll for the menu and links with .scrollto classes
  $(".nav-menu a, #mobile-nav a, .scrollto").on("click", function() {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash)
      if (target.length) {
        var top_space = 0

        if ($("#header").length) {
          top_space = $("#header").outerHeight()

          if (!$("#header").hasClass("header-fixed")) {
            top_space = top_space - 20
          }
        }

        $("html, body").animate(
          {
            scrollTop: target.offset().top - top_space
          },
          1500,
          "easeInOutExpo"
        )

        if ($(this).parents(".nav-menu").length) {
          $(".nav-menu .menu-active").removeClass("menu-active")
          $(this)
            .closest("li")
            .addClass("menu-active")
        }

        if ($("body").hasClass("mobile-nav-active")) {
          $("body").removeClass("mobile-nav-active")
          $("#mobile-nav-toggle i").toggleClass("fa-times fa-bars")
          $("#mobile-body-overly").fadeOut()
        }
        return false
      }
    }
  })

  // Header scroll class
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $("#header").addClass("header-scrolled")
    } else {
      $("#header").removeClass("header-scrolled")
    }
  })

  //dropdown menu click event
  $("#a_forex").on("click", function(e) {
    window.location = "product.html"
  })
  $("#a_finance").on("click", function(e) {
    window.location = "product_finance.html"
  })
  $("#a_index").on("click", function(e) {
    window.location = "product_exponent.html"
  })
  $("#a_metal").on("click", function(e) {
    window.location = "product_metal.html"
  })
  $("#a_stock").on("click", function(e) {
    window.location = "product_stock.html"
  })

  $("#a_forex_zh").on("click", function(e) {
    window.location = "product_zh.html"
  })
  $("#a_finance_zh").on("click", function(e) {
    window.location = "product_finance_zh.html"
  })
  $("#a_index_zh").on("click", function(e) {
    window.location = "product_exponent_zh.html"
  })
  $("#a_metal_zh").on("click", function(e) {
    window.location = "product_metal_zh.html"
  })
  $("#a_stock_zh").on("click", function(e) {
    window.location = "product_stock_zh.html"
  })

  //switch to leverage table
  $("#leverage_btn").on("click", function(e) {
    $("#list_leverage").removeClass("d-none")
    $("#list_product").hide()
    $("#list_leverage").show()
  })

  //switch product table
  $("#product_btn").on("click", function(e) {
    $("#list_product").show()
    $("#list_leverage").hide()
  })
  //switch to exponent trade table
  $("#btn_exponent_trade").on("click", function(e) {
    $("#exponent_contract").hide()
    $("#exponent_trade").show()
  })

  //switch exponent contract table
  $("#btn_exponent_contract").on("click", function(e) {
    $("#exponent_contract").removeClass("d-none")
    $("#exponent_contract").show()
    $("#exponent_trade").hide()
  })

  //show more USA CFD tables
  $("#btn_us_table_more").on("click", function(e) {
    $("#us_row_show_more").hide()
    $("#table_us_cfd .table_more").removeClass("d-none")
    $("#table_us_cfd .table_more").show()
    $("#us_row_show_less").removeClass("d-none")
    $("#us_row_show_less").show()
  })
  //hide USA CFD tables
  $("#btn_us_table_less").on("click", function(e) {
    $("#us_row_show_more").show()
    $("#us_row_show_less").hide()
    $("#table_us_cfd .table_more").hide()
  })

  //show more HK CFD tables
  $("#btn_hk_table_more").on("click", function(e) {
    $("#row_hk_show_more").hide()
    $("#table_hk_cfd .table_more").removeClass("d-none")
    $("#table_hk_cfd .table_more").show()
    $("#row_hk_show_less").removeClass("d-none")
    $("#row_hk_show_less").show()
  })
  //hide HK CFD tables
  $("#btn_hk_table_less").on("click", function(e) {
    $("#row_hk_show_more").show()
    $("#row_hk_show_less").hide()
    $("#table_hk_cfd .table_more").hide()
  })

  // Intro carousel
  var introCarousel = $(".carousel")
  var introCarouselIndicators = $(".carousel-indicators")
  introCarousel
    .find(".carousel-inner")
    .children(".carousel-item")
    .each(function(index) {
      index === 0
        ? introCarouselIndicators.append(
            "<li data-target='#introCarousel' data-slide-to='" +
              index +
              "' class='active'></li>"
          )
        : introCarouselIndicators.append(
            "<li data-target='#introCarousel' data-slide-to='" +
              index +
              "'></li>"
          )
    })

  // $(".carousel").swipe({
  //   swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
  //     if (direction == 'left') $(this).carousel('next');
  //     if (direction == 'right') $(this).carousel('prev');
  //   },
  //   allowPageScroll:"vertical"
  // });
  //
  //
  //
  //
  // // Clients carousel (uses the Owl Carousel library)
  // $(".clients-carousel").owlCarousel({
  //   autoplay: true,
  //   dots: true,
  //   loop: true,
  //   responsive: { 0: { items: 2 }, 768: { items: 4 }, 900: { items: 6 }
  //   }
  // });
  /* photoswipe
   * ----------------------------------------------------- */
  var clPhotoswipe = function() {
    var items = [],
      $pswp = $(".pswp")[0],
      $folioItems = $(".item-folio")

    // get items
    $folioItems.each(function(i) {
      var $folio = $(this),
        $thumbLink = $folio.find(".thumb-link"),
        $title = $folio.find(".item-folio__title"),
        $caption = $folio.find(".item-folio__caption"),
        $titleText = "<h4>" + $.trim($title.html()) + "</h4>",
        $captionText = $.trim($caption.html()),
        $href = $thumbLink.attr("href"),
        $size = $thumbLink.data("size").split("x"),
        $width = $size[0],
        $height = $size[1]

      var item = {
        src: $href,
        w: $width,
        h: $height
      }

      if ($caption.length > 0) {
        item.title = $.trim($titleText + $captionText)
      }

      items.push(item)
    })

    // bind click event
    $folioItems.each(function(i) {
      $(this).on("click", function(e) {
        e.preventDefault()
        var options = {
          index: i,
          showHideOpacity: true
        }

        // initialize PhotoSwipe
        var lightBox = new PhotoSwipe(
          $pswp,
          PhotoSwipeUI_Default,
          items,
          options
        )
        lightBox.init()
      })
    })
  }

  //     // 获取弹窗
  // var modal = document.getElementById('myModal');

  // // 打开弹窗的按钮对象
  // var btn1 = document.getElementById("myBtn1");
  // var btn2 = document.getElementById("myBtn2");
  // var btn3 = document.getElementById("myBtn3");

  // // 获取 <span> 元素，用于关闭弹窗
  // var span = document.querySelector('.close');

  // var content = [document.getElementById("content1"),document.getElementById("content2"),document.getElementById("content3")];
  // // 点击按钮打开弹窗
  // btn1.onclick = function() {
  //     content[0].style.display = "block";
  //     content[1].style.display = "none";
  //     content[2].style.display = "none";
  //     modal.style.display = "block";
  // }
  // btn2.onclick = function() {
  //     content[0].style.display = "none";
  //     content[1].style.display = "block";
  //     content[2].style.display = "none";
  //     modal.style.display = "block";
  // }
  // btn3.onclick = function() {
  //     content[0].style.display = "none";
  //     content[1].style.display = "none";
  //     content[2].style.display = "block";
  //     modal.style.display = "block";
  // }
  // // 点击 <span> (x), 关闭弹窗
  // span.onclick = function() {
  //   modal.style.display = "none";
  // }
  // // 在用户点击其他地方时，关闭弹窗
  // window.onclick = function(event) {
  //     if (event.target == modal) {
  //       modal.style.display = "none";
  //     }
  // }
})
