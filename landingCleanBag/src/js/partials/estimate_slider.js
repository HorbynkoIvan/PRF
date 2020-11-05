import slick from 'slick-carousel';

export function estimateSlider() {
    let $slider = $('.estimate .slider');

    // $slider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    //     let i = (currentSlide ? currentSlide : 0) + 1;
    //     $('.estimate .current').text(i);
    //     $('.estimate .total').text(slick.slideCount);
    // });

    $slider.slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<svg class="arrow_left"><use xlink:href="https://cdn.parfums.ua/public/upload/newAdminUpload/RichContent/900542/arrow_sprite.svg#arrow_left"></use></svg>',
        nextArrow: '<svg class="arrow_right"><use xlink:href="https://cdn.parfums.ua/public/upload/newAdminUpload/RichContent/900542/arrow_sprite.svg#arrow_right"></use></svg>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // $('.estimate .prev').on('click', function (e) {
    //     $slider.slick("slickPrev");
    // })
    // $('.estimate .next').on('click', function (e) {
    //     $slider.slick("slickNext");
    // })


}