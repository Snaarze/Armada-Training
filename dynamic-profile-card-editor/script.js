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

const updateProfileBtn = document.querySelector(".update-profile-btn");

// change the name text
const updateName = () => {
  if (!nameInput.value) return alert("Please type a name first");
  return (nameText.textContent = nameInput.value);
};
// update the bio text
const updateBio = () => {
  return (bioText.textContent = bioInput.value);
};
// update the image by changing the attribute
const updateImage = () => {
  return profileImg.setAttribute("src", profileInput.value);
};

// update the background color of the profile container
const updateBackgroundColor = () => {
  return (profileContainer.style.backgroundColor = changeColorInput.value);
};

const master = (e) => {
  e.preventDefault();
  updateName();
  updateBio();
  updateImage();
  updateBackgroundColor();
};

// attach event listener
updateProfileBtn.addEventListener("click", master);
