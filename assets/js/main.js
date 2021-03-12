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

    /*** Search form ***/
    // button flight status
    $(".btn-filter-flight_status").on("click", function () {
        $(".main-ticket-search_form .flight-search-manage_trip").hide();
        $(".main-ticket-search_form .flight-search-book").hide();

        $(".main-ticket-search_form__filters-button").removeClass("active");
        $(this).addClass('active');
        $(".main-ticket-search_form .flight-search-status").show();
    });

    // button manage trips
    $(".btn-filter-manage_trips").on("click", function () {
        $(".main-ticket-search_form .flight-search-book").hide();
        $(".main-ticket-search_form .flight-search-status").hide();

        $(".main-ticket-search_form__filters-button").removeClass("active");
        $(this).addClass('active');
        $(".main-ticket-search_form .flight-search-manage_trip").show();
    });

    // button book
    $(".btn-filter-book").on("click", function () {
        $(".main-ticket-search_form .flight-search-manage_trip").hide();
        $(".main-ticket-search_form .flight-search-status").hide();

        $(".main-ticket-search_form__filters-button").removeClass("active");
        $(this).addClass('active');
        $(".main-ticket-search_form .flight-search-book").show();
    });

    // search route
    $(".btn-search-route").on("click", function () {
        $(".search-department-dropdown").removeClass("active");
        $(".passengers-dropdown").removeClass("active");
        $(".search-route-dropdown").toggleClass("active");
    });

    // search department
    $(".btn-search-department").on("click", function () {
        $(".search-route-dropdown").removeClass("active");
        $(".passengers-dropdown").removeClass("active");
        $(".search-department-dropdown").toggleClass("active");
    });

    // search passengers number
    $(".btn-passengers-number").on("click", function () {
        $(".search-route-dropdown").removeClass("active");
        $(".search-department-dropdown").removeClass("active");
        $(".passengers-dropdown").toggleClass("active");
    });
    /*** / Search form ***/

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

    // ordering steeps
    $("#order-customer___details form button[type=submit]").on("click", function () {
        event.preventDefault();
        $("#order-customer___details").hide(); // step 1 hide
        $("#order-passenger___details").show(250); // step 2 show
    });
    $("#order-passenger___details form button[type=submit]").on("click", function () {
        event.preventDefault();
        $("#order-passenger___details").hide(); // step 2 hide
        $("#order-extra___services").show(250); // step 3 show
    });
    $("#order-extra___services .continue-payment button").on("click", function () {
        event.preventDefault();
        $("#order-extra___services").hide(); // step 2 hide
        $("#order-payment___details").show(250); // step 3 show
    });

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
    if ( $("#information-tabs").length > 0 ) {
        $("#information-tabs").tabs({
            hide: 400, show: 400
        }).addClass( "ui-tabs-vertical ui-helper-clearfix" );
        $( "#information-tabs li" ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );
    }

    /* list of flights */
    $(".flights-sidebar span.filter-item__open").on("click", function () {
        if ($(".flights-sidebar .filter-item.open").has(this).length) {
            $(this).parents('.filter-item').removeClass("open");
        } else {
            $(this).parents('.filter-item').addClass("open");
        }
    });
    /* /.list of flights */


    // footer spoiler
    $('.footer-menu__title').on('click', function() {
        $(this).toggleClass('active').next().slideToggle(300);
    });



    /*** list-of-flights ***/

    /**
     * Create Range Slider
     * @param sliderId (Id Name without - #)
     * @param labelId (Id Name without - #)
     * @param min
     * @param max
     * @param values
     */
    function createRangeSlider(sliderId, labelId, min = 50, max = 1000, values = [100, 300]) {
        $("#" + sliderId).slider({
            animate: "slow",
            range: true,
            min,
            max,
            isRTL: true,
            values,
            slide: function( event, ui ) {
                $("#" + labelId).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
            }
        });
        $("#" + labelId).val( "$" + $("#" + sliderId).slider( "values", 0 ) + " - $" + $("#" + sliderId).slider( "values", 1 ) );
    }


    /**
     * Create Duration Range Slider
     * @param sliderId (Id Name without - #)
     * @param labelId (Id Name without - #)
     * @param min
     * @param max
     * @param values
     */
    function createRangeSliderDuration(sliderId, labelId, min = 60, max = 1000, values = [120, 360]) {

        function converDataToDuration(max, min) {
            let maxTime = max;
            let minTime = min;
            let maxHours = Math.floor(maxTime / 60);
            let maxMinutes = maxTime % 60;
            let minHours = Math.floor(minTime / 60);
            let minMinutes = minTime % 60;
            $("#" + labelId).val(  maxHours + "h " + maxMinutes + "min"  + " - " + minHours + "h " + minMinutes + "min");
        }

        $("#" + sliderId).slider({
            animate: "slow",
            range: true,
            min,
            max,
            step: 5,
            isRTL: true,
            values,
            slide: function( event, ui ) {
                converDataToDuration(ui.values[1], ui.values[0]);
            }
        });
        converDataToDuration( $("#" + sliderId).slider( "values", 1 ),  $("#" + sliderId).slider( "values", 0 ));
    }


    /**
     * Create Date Range Slider
     * @param sliderId
     * @param labelId
     * @param min
     * @param max
     * @param values
     */
    let currentTime = new Date().getTime() / 1000;
    let maxTime = new Date('2022.01.01').getTime() / 1000;
    function createDateRangeSlider(sliderId, labelId, min = currentTime, max = maxTime, values = [ currentTime + 1000000, currentTime + 5000000 ]) {
        $("#" + sliderId).slider({
            range: true,
            isRTL: true,
            min,
            max,
            step: 86400,
            values,
            slide: function( event, ui ) {
                $("#" + labelId).val( (new Date(ui.values[1] * 1000).toDateString() )
                    + " - " + (new Date(ui.values[0] *1000)).toDateString() );
            }
        });
        $("#" + labelId).val( (new Date($("#" + sliderId).slider( "values", 1 )*1000).toDateString())
            + " - " + (new Date($("#" + sliderId).slider( "values", 0 )*1000)).toDateString());
    }

    // create ticket-price-slider
    createRangeSlider("ticket-price-slider", "ticket-price-amount");

    //create duration on the way slider
    createRangeSliderDuration("duration-onway-slider", "duration-onway-amount",80, 500, [180, 300]);
    //create duration on the way slider
    createRangeSliderDuration("duration-goback-slider", "duration-goback-amount");
    //create stopover slider
    createRangeSliderDuration("stopover-slider", "stopover-amount", 180, 800, [320, 500]);

    //create slider there depart-from-slider
    createDateRangeSlider("depart-from-slider", "depart-from-amount");
    //create slider there arrival-in-slider
    createDateRangeSlider("arrival-in-slider", "arrival-in-amount");
    // create slider back depart-back-from-slider
    createDateRangeSlider("depart-back-from-slider", "depart-back-from-amount");
    // create slider back arrival-back-in-slider
    createDateRangeSlider("arrival-back-in-slider", "arrival-back-in-amount");

    // more offers

    /*** /.list-of-flights ***/



});


















