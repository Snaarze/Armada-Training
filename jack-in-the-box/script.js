const container = document.querySelector(".container");
const img = document.querySelector(".img-box");
const btn = document.querySelector("button");

let timeoutID = "";

// change image depending on the state
function changeImage() {
  const setNewImg = img.getAttribute("data-open-src");
  const closeNewImg = img.getAttribute("data-closed-src");

  if (img.getAttribute("src") === setNewImg && typeof timeoutID === "number") {
    // set the img src to close img, open text
    img.setAttribute("src", closeNewImg);
    btn.textContent = "Open";
    // clear the timeout for if button is clicked again
    // read this somewhere mdn documentation
    clearTimeout(timeoutID);
    return;
  }

  //   set the open image, and close text
  img.setAttribute("src", setNewImg);
  btn.textContent = "Close";

  //   automatically closed after 3 seconds
  timeoutID = setTimeout(() => {
    img.setAttribute("src", closeNewImg);
    btn.textContent = "Open";
  }, 3000);
}

container.addEventListener("click", changeImage);
