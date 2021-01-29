/**
 * Splide settings
 * @type {Splide}
 */

document.addEventListener("DOMContentLoaded", function () {
    const menu = new MmenuLight(
        document.querySelector("#my-menu"),
        "(max-width: 992px)"
    );

    const navigator = menu.navigation();
    const drawer = menu.offcanvas();

    document.querySelector("a[href='#my-menu']").addEventListener("click", (evnt) => {
        evnt.preventDefault();
        drawer.open();
    });
});


$(document).ready(function(){

    $(".owl-carousel").owlCarousel({
        items: 3,
        loop: true,
        smartSpeed: 600,
        autoHeight: true,
        center: true,
        autoplay: true,
        autoplayTimeout: 1000,
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
    })

    $('.owl-carousel').on('translate.owl.carousel', function(e){
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

    // footer spoiler
    $('.footer-menu__title').on('click', function() {
        $(this).toggleClass('active').next().slideToggle(300);
    })
});
