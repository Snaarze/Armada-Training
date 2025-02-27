const container = document.querySelector(".container");
const img = document.querySelector(".img-box");
const btn = document.querySelector("button");

// change image depending on the state
function changeImage() {
  const setNewImg = img.getAttribute("data-open-src");
  const closeNewImg = img.getAttribute("data-closed-src");

  if (img.getAttribute("src") === setNewImg) {
    // set the img src to close img, open text
    img.setAttribute("src", closeNewImg);
    btn.textContent = "Open";
    return;
  }

  //   set the open image, and close text
  img.setAttribute("src", setNewImg);
  btn.textContent = "Close";

  //   automatically closed after 3 seconds
  setTimeout(() => {
    console.log("test");
    img.setAttribute("src", closeNewImg);
    btn.textContent = "Open";
  }, 3000);
}

container.addEventListener("click", changeImage);
