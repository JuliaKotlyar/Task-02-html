setInterval(updateDateTime, 1000);
function updateDateTime() {
  const dateTime = document.querySelector('.date-time');
  dateTime.innerText = new Date().toLocaleString();
}

// carousel

$(document).ready(function () {
  $('.slider').slick({
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 1000,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});
