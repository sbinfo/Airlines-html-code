document.addEventListener("DOMContentLoaded", function () {
    /* Mobile menu */
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
    /* Mobile menu end */
});


$(document).ready(function(){
    // Contact page
    function switchContactPage() {
        if ($("#filter-btn_offices").hasClass('active')) {
            $('.contact-from__passengers').hide();
            $('.contact-from__offices').show();
        }
        if ($('#filter-btn_passengers').hasClass('active')) {
            $('.contact-from__offices').hide();
            $('.contact-from__passengers').show();
        }
    }
    switchContactPage();

    $('.contact-form__filter button').on('click', function () {
        $('.contact-form__filter button').removeClass('active')
        $(this).toggleClass('active');

        switchContactPage();
    })

    // Contact page End

    // footer spoiler
    $('.footer-menu__title').on('click', function() {
        $(this).toggleClass('active').next().slideToggle(300);
    })
});


















