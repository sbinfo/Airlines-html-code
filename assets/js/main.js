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

    // footer spoiler
    $('.footer-menu__title').on('click', function() {
        $(this).toggleClass('active').next().slideToggle(300);
    })
});
