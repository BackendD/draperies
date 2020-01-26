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