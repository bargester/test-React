$(document).ready(function () {
    $("#nav-menu").on("click", "a", function (event) {
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

    $(window).scroll(function () {
        var $header = $('.header-s');
        if ($(window).scrollTop() >= 100) {
            $header.addClass('header-s--a');
        } else {
            $header.removeClass('header-s--a');
        }
    });

    $('.slick-slider').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows: false
                }
            }
        ]
    });
    $(function () {
        $('.tab-title__item').click(function () {
            var index = $(this).index();
            $('.tab-title__link').removeClass('tab-title__link--active');
            $(this).children().addClass('tab-title__link--active');
            $('.tab-content__item').css('display', 'none').eq(index).css('display', 'block');
        });

        $('.tab-title__link:first').addClass('tab-title__link--active');
        $('.tab-content__item:first').addClass('tab-content__item--active');

    });

    $(window).resize(function() {
        if ($(window).width() > 500) {
            $('nav ul').removeAttr('style');
        }
    });

    $('.header-s__menu-trigger').click(function () {
        $('.nav__list').slideToggle(500);
    });


    var time = 1,
        cc = 1;
    $(window).scroll(function () {
        $('#counter-s').each(function () {
            var
                cPos = $(this).offset().top,
                topWindow = $(window).scrollTop();
            if (cPos < topWindow + 400) {
                if (cc < 2) {
                    $(".counter-s__title").addClass("viz");
                    $('.counter-s__title').each(function () {
                        var
                            i = 1,
                            num = $(this).data('num'),
                            step = 1000 * time / num,
                            that = $(this),
                            int = setInterval(function () {
                                if (i <= num) {
                                    that.html(i);
                                } else {
                                    cc += 2;
                                    clearInterval(int);
                                }
                                i += 5;
                            }, step);
                    });
                }
            }
        });
    });
});
