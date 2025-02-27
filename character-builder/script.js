// selectors
const img = document.querySelectorAll("ul li div img ");
let headArmorImg = document.querySelector(".head-armor");
let chestPlateArmor = document.querySelector(".chestplate-armor");
let leggingsArmor = document.querySelector(".leggings-armor");
let bootsArmor = document.querySelector(".boots-armor");

// iterate to all img
img.forEach((armor) => {
  armor.addEventListener("click", changeArmor);
});

// change the armor accordingly
function changeArmor() {
  let setHead = this.getAttribute("src");

  //   change head armor
  if (this.getAttribute("data-part") == "head") {
    headArmorImg.src = setHead;
  }
  //   change chesplate armor
  if (this.getAttribute("data-part") == "chestplate") {
    chestPlateArmor.src = setHead;
  }
  //   change leggings armor
  if (this.getAttribute("data-part") == "leggings") {
    leggingsArmor.src = setHead;
  }
  //   change boots armor
  if (this.getAttribute("data-part") == "boots") {
    bootsArmor.src = setHead;
  }
}
