import slick from 'slick-carousel';

export function photoGallery() {
    let $slider = $('.gallery .slider');

    $slider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        let i = (currentSlide ? currentSlide : 0) + 1;
        $('.gallery .current').text(i);
        $('.gallery .total').text(slick.slideCount);
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

    $('.gallery .prev').on('click', function (e) {
        $slider.slick("slickPrev");
    })
    $('.gallery .next').on('click', function (e) {
        $slider.slick("slickNext");
    })



}