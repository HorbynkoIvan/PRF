export function estimateSlider() {
    let $slider = $('.estimate .slider');

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
}