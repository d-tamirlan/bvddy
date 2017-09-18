$(document).ready(function () {
    $("#main-slider").slick({
        infinite: true,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        speed: 500,
        dots: false,
        arrows: false,
        fade: true
    });
});


// $('.command-slider').slick({
//             infinite: true,
//             ialSlide: 1,
//             slidesToShow: 4,
//             slidesToScroll: 1,
//             idth: true,
//             prevArrow: $('.command__arrow-left'),
//             nextArrow: $('.command__arrow-right'),
//             responsive: [
//                 {
//                   breakpoint: 980,
//                   settings: {
//                       slidesToShow: 3,
//                       slidesToScroll: 1,
//                     arrows: false,
//                    iableWidth: true,
//                   }
//                 },
//                 {
//                   breakpoint: 550,
//                   settings: {
//                       slidesToShow: 2,
//                       slidesToScroll: 1,
//                       arrows: false,
//                       eWidth: true,
//                   }
//                 },
//             ]
//         });