import slick from 'slick-carousel';

export function aboutSlider() {
    let $slider = $('.about__slider');

    $slider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        let i = (currentSlide ? currentSlide : 0) + 1;
        $('.about .current').text(i);
        $('.about .total').text(slick.slideCount);
    });

    $slider.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
        arrows: false,
        //autoplay: true,
        //autoplaySpeed: 5000,
        pauseOnHover: true,
        dots: false,
        infinite: false,
        fade: true,
    });

    $('.about .prev').on('click', function (e) {
        $slider.slick("slickPrev");
    })
    $('.about .next').on('click', function (e) {
        $slider.slick("slickNext");
    })



}