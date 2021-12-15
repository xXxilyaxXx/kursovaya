$(document).ready(function(){
    $("#up").on("click","a", function (event) {//обработчик нескольких событий (событие, над каким селектором событие, сценарий)
        event.preventDefault();//отменяем стандартную обработку нажатия по ссылке
        var id  = $(this).attr('href'), //забираем идентификатор бока с атрибута href
        top = $(id).offset().top; //узнаем высоту от начала страницы до блока на который ссылается якорь
        $('body,html').animate({scrollTop: top}, 1000); //анимируем переход на расстояние - top за 1500 мс;
    });
});

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}