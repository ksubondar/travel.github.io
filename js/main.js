$(document).ready(function() {
   $('.request_button').click(function() {
        $('.form').css('display', 'block');
        $('.request_button').hide();
   });
    $('.cross').click(function() {
        $('.form').hide();
        $('.request_button').show();
});
$(".menuToggle").click(function() {
    $(this).toggleClass("active");
    $('.menu').toggleClass("active");
    $('.menu').slideToggle(300, function(){
      if($(this).css('display') === "none"){
        $(this).removeAttr('style');
      }
    });
  });
 
//   $(`.rev_slider`).slick({
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     dots: true,
//     speed: 1500,
//     responsive: [
//         {
//             breakpoint: 700,
//             settings: {
//                 arrows: false,
//             }
//         },
//         {
//             breakpoint: 600,
//             settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1,
//                 dots: true,
//                 speed: 1500,
//             }
//         }
        
//     ]
// });
});