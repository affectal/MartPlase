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



    $('.sidebar__item-title.cat').on('click', function() {
        $('.sidebar__item-cat__wrapper').slideToggle();
    });



    $('.sidebar__item-title.fil').on('click', function() {
        $('.sidebar__item-fil__wrapper').slideToggle();
    });


    $('.sidebar__item-title.range').on('click', function() {
        $('.sidebar__item-range__wrapper').slideToggle();
    });


    $('.icon-grid').on('click', function() {
        $('.item__inner-grid').show();
        $('.item__inner-list').hide();
        $('.icon-grid').addClass('active');
        $('.icon-list').removeClass('active');
    });

    $('.icon-list').on('click', function() {
        $('.item__inner-list').show();
        $('.item__inner-grid').hide();
        $('.icon-list').addClass('active');
        $('.icon-grid').removeClass('active');
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


    $('.js-range-slider').ionRangeSlider({
        type: 'double',
        min: 0,
        max: 1000,
        from: 200,
        to: 500,
        grid: true
    });


    $('.pagination-container').pagination({
        dataSource: [1, 2, 3, 4, 5, 6, 7, ...195],
        callback: function(data, pagination) {
            // template method of yourself
            var html = template(data);
            $('.data-container').html(html);
        }
    })




});