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
    /*** Order page ***/

    $(".order-details-filter.filter__buttons button.order-details-btn_terms").on('click', function() {
        $(this).addClass('active');
        $(".order-details-filter.filter__buttons button.order-details-btn_summary").removeClass('active');
        $(".order-details .order-details-card").hide();
        $(".order-details .order-details-terms").show(250);
    });
    $(".order-details-filter.filter__buttons button.order-details-btn_summary").on('click', function() {
        $(this).addClass('active');
        $(".order-details-filter.filter__buttons button.order-details-btn_terms").removeClass('active');
        $(".order-details .order-details-terms").hide();
        $(".order-details .order-details-card").show(250);
    });

    $(".details-extra__more").hide();
    $(".details-extra__btn_open").on('click', function () {
       const selectedParent = $(this).closest(".details-extra");
       if (selectedParent.children('.details-extra__more').hasClass('extra-more-not_show')) {
           selectedParent.children('.details-extra__more').removeClass('extra-more-not_show');
           selectedParent.children('.details-extra__more').show(250);
       } else {
           selectedParent.children('.details-extra__more').addClass('extra-more-not_show');
           selectedParent.children('.details-extra__more').hide(250);
       }
    });

    $(".order-details__extra").hide();
    $(".btn-flight_details").on('click', function () {
         if ( $(".order-details__extra").is(":hidden") ) {
             $(".order-details__extra").show(250);
             $(this).addClass('opened');
         } else if ( $(".order-details__extra").is(":visible") ) {
             $(".order-details__extra").hide(250);
             $(this).removeClass('opened');
         }
    });

    // luggage edit
    $(".--luggage-edit").hide(250);
    $("button.--luggage-edit-open").on('click', function () {
        $('.extra-luggage-edit .--luggage-info').hide();
        $(".extra-luggage-edit .--luggage-edit").show(250);
    });

    $(".--luggage-edit button.--luggage-save").on('click', function () {
        $(".extra-luggage-edit .--luggage-edit").hide(250);
        $('.extra-luggage-edit .--luggage-info').show();
    })

    // sits edit
    $(".--sits-edit").hide(250);
    $("button.--sits-edit-open").on('click', function () {
        $('.extra-sits-edit .--sits-info').hide();
        $(".extra-sits-edit .--sits-edit").show(250);
    });

    $("button.--sits-save").on('click', function () {
        $(".extra-sits-edit .--sits-edit").hide(250);
        $('.extra-sits-edit .--sits-info').show();
    });

    $(".sits-edit__information_seat").hide();
    $(".sits-edit__information_seat .information-close").on('click', function() {
        $(".sits-edit__information_seat").hide();
        $(".sits-edit__information").show();
    })

    /*** Order page end ***/

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

    // FAQ
    $(".faq-list .faq-list-item").on("click", function () {
        $(this).toggleClass("active", 500);
    });

    // General Information
    $("#information-tabs").tabs({
        hide: 400, show: 400
    }).addClass( "ui-tabs-vertical ui-helper-clearfix" );
    $( "#information-tabs li" ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );

    // footer spoiler
    $('.footer-menu__title').on('click', function() {
        $(this).toggleClass('active').next().slideToggle(300);
    })
});


















