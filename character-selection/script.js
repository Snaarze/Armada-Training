// selectors
const selectionContainer = document.querySelector(".selection-container");
const heroPreviewImg = document.querySelector(".hero-preview-img");
const heroName = document.querySelector(".hero-name");
const heroDescription = document.querySelector(".hero-description");

function updateImg(e) {
  e.stopPropagation();
  if (e.target.tagName === "IMG") {
    // set a active class
    e.target.classList.toggle("active");
    // remove class after 1 seconds
    setTimeout(() => {
      e.target.classList.toggle("active");
    }, 1000);
    // getters of attribute
    let setImg = e.target.getAttribute("data-preview-src");
    let setName = e.target.getAttribute("data-hero-name");
    let setDescription = e.target.getAttribute("data-hero-description");

    // set value to change their image
    heroPreviewImg.setAttribute("src", setImg);
    heroName.textContent = setName;
    heroDescription.textContent = setDescription;
  }
}

// event listeners
selectionContainer.addEventListener("click", updateImg);
