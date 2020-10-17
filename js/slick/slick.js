        $('.slider').slick({
            autoplay: true,
            autoplaySpeed: 500,
            arrows: false,
            dots: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive:[
                {
                    breakpoint: 480,
                    settings:{
                        slidesToShow:4,
                    }
                },
                {
                    breakpoint: 479,
                    settings:{
                        slidesToShow:1,
                    }
                },
            ]
        });