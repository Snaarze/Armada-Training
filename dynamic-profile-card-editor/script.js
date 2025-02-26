// let selectors
let nameText = document.querySelector(".username-text");
let bioText = document.querySelector(".bio-text");
let bioInput = document.querySelector("#bio");
let nameInput = document.querySelector("#name");
let profileImg = document.querySelector("#profile-img");
let profileInput = document.querySelector("#img-input");
let changeColorInput = document.querySelector("#changeColor");
let profileContainer = document.querySelector(".profile-info-container");
// const selectors
const updateNameBtn = document.querySelector(".update-name-btn");
const updateBioBtn = document.querySelector(".update-bio-btn");
const updateImageBtn = document.querySelector(".update-image-btn");
const updateBgColor = document.querySelector(".change-bg-color");

// change the name text
const updateName = (e) => {
  e.preventDefault();
  if (!nameInput.value) return alert("Please type a name first");
  return (nameText.textContent = nameInput.value);
};
// update the bio text
const updateBio = (e) => {
  e.preventDefault();
  return (bioText.textContent = bioInput.value);
};
// update the image by changing the attribute
const updateImage = (e) => {
  e.preventDefault();
  return profileImg.setAttribute("src", profileInput.value);
};

// update the background color of the profile container
const updateBackgroundColor = (e) => {
  e.preventDefault();
  return (profileContainer.style.backgroundColor = changeColorInput.value);
};

// attach event listener
updateNameBtn.addEventListener("click", updateName);
updateBioBtn.addEventListener("click", updateBio);
updateImageBtn.addEventListener("click", updateImage);
updateBgColor.addEventListener("click", updateBackgroundColor);
