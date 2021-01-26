/**
 * Splide settings
 * @type {Splide}
 */

// document.addEventListener( 'DOMContentLoaded', function () {

// });

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop: true,
        center: true,
        items: 3,
        autoHeight: true
    });
    $('.owl-carousel').on('translate.owl.carousel', function(e){
        idx = e.item.index;
        $('.owl-item.big').removeClass('big');
        $('.owl-item.medium').removeClass('medium');
        $('.owl-item').eq(idx).addClass('big');
        $('.owl-item').eq(idx-1).addClass('medium');
        $('.owl-item').eq(idx+1).addClass('medium');
    });
});
