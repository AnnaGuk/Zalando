const hamburgerBtn = document.getElementById("hmbg");
const mobileMenu = document.getElementById("mbl");

hamburgerBtn.addEventListener("click", function() {
  if (mobileMenu.style.display === "block") {
    mobileMenu.style.display = "none";
  } else {
    mobileMenu.style.display = "block";
  }
});

const button = document.getElementById("button--right");
button.onclick = function() {
  const container = document.getElementById("content");
  sideScroll(container, "right", 25, 100, 10);
};

const back = document.getElementById("button--left");
back.onclick = function() {
  const container = document.getElementById("content");
  sideScroll(container, "left", 25, 100, 10);
};

function sideScroll(element, direction, speed, distance, step) {
  scrollAmount = 0;
  const slideTimer = setInterval(function() {
    if (direction == "left") {
      element.scrollLeft -= step;
    } else {
      element.scrollLeft += step;
    }
    scrollAmount += step;
    if (scrollAmount >= distance) {
      window.clearInterval(slideTimer);
    }
  }, speed);
}
