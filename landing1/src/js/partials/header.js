export function headerCollapse() {
    let $headerSide = $('.header__sidenav');
    let $collapse = $('.collapse');

    $collapse.on('click', function () {
        $(this).toggleClass('active');
        $headerSide.toggleClass('active');
    })
}

export function headerScroll() {
        const header = document.querySelector('.header');

        if (document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100) {
            header.classList.add('fixed');
        } else {
            header.classList.remove('fixed');
        }

}