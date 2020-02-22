$(function() {


    $('.rate__star').rateYo({
        rating: 5,
        starWidth: "15px"
    });

    $('.slider__items').slick({
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        dots: false,
        arrows: true,
        rows: '0'
    });


});