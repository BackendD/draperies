/* ==============================================
                    Preloader
============================================== */
$(window).on('load', function() {
    $('#status').fadeOut();
    $('#preloader').delay(400).fadeOut('slow')
});

/* ==============================================
            Map [51.607550, 32.716491]
============================================== */
$(window).on('load', function() {
    var mymap = L.map('map').setView([32.716491, 51.607550], 14);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
    }).addTo(mymap);
      
    var marker = L.marker([32.716491, 51.607550], {title: 'برای دیدن آدرس کلیک کنید'}).addTo(mymap);
    marker.bindPopup('<div class="text-center" dir="rtl">خیابان امام خمینی، شهرک کوثر، مجتمع تجاری نور، <b>پرده سرای نور</b></div>');
});

/* ==============================================
                    Navigation
============================================== */
$(function() {
    showHideNav()

    $(window).scroll(function() {
        showHideNav()
    });

    function showHideNav() {
        if ($(window).scrollTop() > 50) {
            $("nav").addClass("white-nav-top");
            $(".navbar-brand img").attr("src", "img/logo/logo-dark.png");

            $("#back-to-top").fadeIn();
        } else {
            $("nav").removeClass("white-nav-top");
            $(".navbar-brand img").attr("src", "img/logo/logo.png");
            $("#back-to-top").fadeOut();
        }
    }
});

$(function() {

    $("a.smooth-scroll").click(function(event) {
        event.preventDefault();

        var section_id = $(this).attr("href");
        console.log(section_id)
        $("html, body").animate({
            scrollTop: $(section_id).offset().top - 64
        }, 1250, "easeInOutBack");
    });

});

/* ==============================================
                Mobile Menu
============================================== */
$(function() {
    $("#mobile-nav-open-btn").click(function() {
        $("#mobile-nav").css("height", "100%");
    });

    $("#mobile-nav-close-btn, #mobile-nav a").click(function() {
        $("#mobile-nav").css("height", "0%");
    });
});