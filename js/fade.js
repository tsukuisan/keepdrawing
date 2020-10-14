$(function () {
    $(window).scroll(function () {
        const wHeight = screen.height;
        const scrollAmount = $(window).scrollTop();
        $('.scrollanime').each(function () {
            const targetPosition = $(this).offset().top;
            if(scrollAmount > targetPosition - wHeight + 500) {
                $(this).addClass("fadeInDown");
            }
        });
    });
});

