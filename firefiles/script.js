// Select all fireflies
let fireflies = document.querySelectorAll(".firefly");

// Attach event listener to each firefly
fireflies.forEach((firefly) => {
  firefly.addEventListener("click", function () {
    // fireflies shrinks by timing
    setTimeout(() => {
      this.style.transform = "scale(0)";
    }, 600);
    setTimeout(() => {
      this.style.transform = "scale(0.2)";
    }, 500);

    setTimeout(() => {
      this.style.transform = "scale(0.4)";
    }, 400);
    setTimeout(() => {
      this.style.transform = "scale(0.6)";
    }, 300);
    setTimeout(() => {
      this.style.transform = "scale(0.8)";
    }, 200);

    // set hidden after 0.9 secs
    setTimeout(() => {
      this.style.visibility = "hidden"; // "this" refers to the clicked firefly
    }, 900);

    // get back to normal after 1 sec
    setTimeout(() => {
      this.style.visibility = "visible";
      this.style.transform = "scale(1)";
    }, 1000);
  });
});
