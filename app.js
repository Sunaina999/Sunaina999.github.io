const slide = document.querySelector(".slide");
const imgs = document.querySelectorAll(".slide img");
const butt = document.querySelector("#sbutt");
const guesswork = document.querySelector(".guess");
//Buttons
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");

//counter
let counter = 1;
const size = imgs[0].clientWidth;
slide.style.transform = "translateX(" + -size * counter + "px)";

//Button listeners

next.addEventListener("click", () => {
  if (counter >= imgs.length - 1) return;
  slide.style.transition = "transform 0.4s ease-in-out";
  counter++;
  slide.style.transform = "translateX(" + -size * counter + "px)";
});
prev.addEventListener("click", () => {
  if (counter <= 0) return;
  slide.style.transition = "transform 0.4s ease-in-out";
  counter--;
  slide.style.transform = "translateX(" + -size * counter + "px)";
});
slide.addEventListener("transitionend", () => {
  if (imgs[counter].id === "lastclone") {
    slide.style.transition = "none";
    counter = imgs.length - 2;
    slide.style.transform = "translateX(" + -size * counter + "px)";
  }
  if (imgs[counter].id === "firstclone") {
    slide.style.transition = "none";
    counter = imgs.length - counter;
    slide.style.transform = "translateX(" + -size * counter + "px)";
  }
});
butt.addEventListener("click", () => {
  guesswork.innerHTML += "<p>We did it, yoohoo!</p>";
});
