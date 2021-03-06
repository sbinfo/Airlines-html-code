
$(document).ready(function(){

    $(".owl-carousel").owlCarousel({
        items: 3,
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        mouseDrag: false,
        touchDrag: false,
        dots: false,
        smartSpeed: 400,
        center: true,
        responsive: {
            0: {
                items: 1
            },
            767: {
                items: 3
            }
        }
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
});
