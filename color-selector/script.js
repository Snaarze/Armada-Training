document
  .getElementById("container")
  .addEventListener("click", function (event) {
    if (event.target.tagName === "P" || event.target.tagName === h1) return;
    event.stopPropagation();
    alert("You clicked the container!");

    // "this" refers to the element that triggered the event (in this case, 				#container)
    this.style.backgroundColor = "lightgray";
  });

document.querySelectorAll(".color-box").forEach((button) => {
  button.addEventListener("click", function (event) {
    event.stopPropagation(); // Uncomment this to see the difference
    document.getElementById("container").style.backgroundColor =
      this.textContent;
    console.log(this.style.backgroundColor);
  });
});
