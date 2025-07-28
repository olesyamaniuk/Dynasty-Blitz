$(function () {
  $(".y-i-gallery-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,

    cssEase: "linear",
    prevArrow: ".y-i-gallery-list-left",
    nextArrow: ".y-i-gallery-list-right",
  });
});
$(function () {
  $(".y-i-reviews-lists").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    dots: false,
    centerMode: true,
    cssEase: "linear",
    prevArrow: ".y-i-gallery-list-left",
    nextArrow: ".y-i-gallery-list-right",
  });
});
