// selectors
const img = document.querySelectorAll("ul li div img ");

const armorPart = {
  head: document.querySelector(".head-armor"),
  chestplate: document.querySelector(".chestplate-armor"),
  leggings: document.querySelector(".leggings-armor"),
  boots: document.querySelector(".boots-armor"),
};

// iterate to all img
img.forEach((armor) => {
  armor.addEventListener("click", changeArmor);
});

// change the armor accordingly
function changeArmor() {
  let setImg = this.getAttribute("src");
  let dataPart = this.getAttribute("data-part");

  //   if any armor exist in the array change the armor
  if (armorPart[dataPart]) {
    armorPart[dataPart].setAttribute("src", setImg);
  }
}
