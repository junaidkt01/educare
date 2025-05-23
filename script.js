// split sections
$(function () {
  $("#header-sec").load("header.html");
  $("#banner-sec").load("banner.html", function () {
    $("#slide-text").load("components/slide_text.html");
    $("#banner-button").load("components/banner_button.html");
    $("#marquee").load("components/marquee.html");
    $("#chat-button").load("components/chat.html");
    // $("#book-demo").load("components/book-demo-form.html");
  });
  $("#footer-sec").load("footer.html");
  $("#key-points-sec").load("key_points.html");
  $("#stories-sec").load("sections/stories.html");
  $("#teaching-sec").load("sections/teaching.html");
  $("#programs-sec").load("sections/kids-programs.html");
  $("#accordion-sec").load("sections/accordion.html");
  $("#blogs-sec").load("sections/blogs.html");
  $("#subjects-sec").load("sections/subjects.html");
  $("#master-exams-sec").load("sections/master-exams.html");
  $("#testimonials-sec").load("sections/testimonials.html");
  // $("#book-demo").load("components/book-demo-form.html");
});

// Text slider start
$(document).ready(function () {
  let currentSlide = 0;
  const slides = $(".slide");
  const totalSlides = slides.length;

  setInterval(() => {
    slides.eq(currentSlide).removeClass("active");
    currentSlide = (currentSlide + 1) % totalSlides;
    slides.eq(currentSlide).addClass("active");
  }, 3000); // change every 3 seconds
});

const dots = $(".dot");
setInterval(() => {
  slides.eq(currentSlide).removeClass("active");
  dots.eq(currentSlide).removeClass("active");
  currentSlide = (currentSlide + 1) % totalSlides;
  slides.eq(currentSlide).addClass("active");
  dots.eq(currentSlide).addClass("active");
}, 3000);

// Text slider end

// Marquee tag start
$(".marquee").hover(
  function () {
    $(this).find("span").css("animation-play-state", "paused");
  },
  function () {
    $(this).find("span").css("animation-play-state", "running");
  }
);
// Marquee tag end

const openBtn = document.getElementById("open-demo-btn");
const modal = document.getElementById("book-demo");
const closeBtn = document.getElementById("close-btn");

openBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Optional: Click outside modal to close
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
