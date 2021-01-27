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

    const elems = document.querySelectorAll('.owl-item');
    elems.forEach(elem => {
        if (elem.classList.contains('center')) {
            elem.classList.add('big')
        } else if (elem.classList.contains('active') && elem.classList.contains('cloned')) {
            elem.classList.add('left', 'medium')
        } else if (elem.classList.contains('active')) {
            elem.classList.add('right', 'medium')
        }
        console.log(elem)
    })

    $('.owl-carousel').on('translate.owl.carousel', function(e){
        console.log('type', typeof e.item)
        idx = e.item.index;
        $('.owl-item.big').removeClass('big');
        $('.owl-item.left').removeClass('left');
        $('.owl-item.right').removeClass('right');
        $('.owl-item.medium').removeClass('medium');
        $('.owl-item').eq(idx).addClass('big');
        $('.owl-item').eq(idx-1).addClass('medium');
        $('.owl-item').eq(idx-1).addClass('left');
        $('.owl-item').eq(idx+1).addClass('medium');
        $('.owl-item').eq(idx+1).addClass('right');
    });
});
