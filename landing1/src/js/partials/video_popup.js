export function videoPopup() {
    $("[data-media]").on("click", function (e) {
        e.preventDefault();
        let $this = $(this);
        let videoUrl = $this.attr("data-media");
        let $popupIframe = $('.video__popup').find("iframe");

        $popupIframe.attr("src", videoUrl);
        $('body').css({'overflow':'hidden'});
        $this.closest(".container").addClass("video__popup--visible");
        $(".video__popup").addClass("video__popup--visible");
    });

    $(".video__popup").on("click", function (e) {
        e.preventDefault();
        e.stopPropagation();

        $('body').css({'overflow':'auto'});
        $(this).removeClass("video__popup--visible");
        $(".video__popup > iframe").removeAttr('src');
    });

    $(document).keyup(function (event) {
        if (event.which == '27') {
            $('body').css({'overflow':'auto'});
            $(".video__popup").removeClass("video__popup--visible");
            $(".video__popup > iframe").removeAttr('src');
        }
    });

    $(document).keyup(function (event) {
        if (event.which == '27') {
            $('body').css({'overflow':'auto'});
            $(".video__popup").removeClass("video__popup--visible");
            $(".video__popup > iframe").removeAttr('src');
        }
    });
}