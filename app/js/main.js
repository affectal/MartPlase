$(function() {


    $('.rate__star').rateYo({
        rating: 5,
        starWidth: "15px",
        readOnly: true
    });

    $('.slider__items').slick({
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        dots: false,
        arrows: true,


    });


    $('.followers__slider').slick({
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: false,
        arrows: true


    });


    $('.product__top-menu').on('click', function() {
        $('.top__menu-list').slideToggle();
    });



    $('.search__inner::before').on('click', function() {
        $('.categories').slideToggle();
    });


    $('.feedback__inner').slick({
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        arrows: true


    });

    var mixer = mixitup('.product__inner');

});