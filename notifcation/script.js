const container = document.querySelector(".container");
const showBtn = document.querySelector(".show-btn");
let counter = 0;
const showNotification = () => {
  // create element li  act as the notifcation container
  const notificationContainer = document.createElement("li");
  const textNotification = document.createElement("p");
  const closeBtn = document.createElement("button");

  //   setting the text content of the element
  textNotification.textContent = `You have ${counter} new message!`;
  closeBtn.textContent = "X";

  //   append children to parents
  notificationContainer.appendChild(textNotification);
  notificationContainer.appendChild(closeBtn);

  //   if container is valdi and has children
  if (container) {
    // add new element before the first element
    container.insertBefore(notificationContainer, container.firstChild);
  } else {
    // add child to the last of the element
    container.appendChild(notificationContainer);
  }

  //   automtically add listeners to the button
  closeBtn.addEventListener("click", removeNotification);

  //   remove the created li after 5 seconds if no action taken
  setTimeout(() => {
    container.removeChild(notificationContainer);
  }, 5000);
  counter++;
};

const removeNotification = (e) => {
  // remove the child of the clicked button
  //   im not sure if parentElement is allowed to use
  //
  container.removeChild(e.target.parentElement);
};

showBtn.addEventListener("click", showNotification);
