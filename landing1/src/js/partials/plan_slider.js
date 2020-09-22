import slick from 'slick-carousel';

export function planSlider() {
    let $slider = $('.plan__slider');
    let $planItem = $('.plan__item');

    $slider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        let i = (currentSlide ? currentSlide : 0) + 1;
        $('.plan .current').text(i);
        $('.plan .total').text(slick.slideCount);
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

    $('.plan .prev').on('click', function (e) {
        $slider.slick("slickPrev");
    })
    $('.plan .next').on('click', function (e) {
        $slider.slick("slickNext");
    })

    //vertical tabs
    $planItem.on('click', function (e) {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        let index = $(this).index();
        $slider.siblings().removeClass('active');
        $slider.eq(index).addClass('active');
    })

}