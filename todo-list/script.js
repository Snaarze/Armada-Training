const taskInput = document.querySelector("#task-input");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".task-container");
const body = document.querySelector("body");
let taskItems = [];

const addNewTask = () => {
  // push item to the array
  if (!taskInput.value) return alert(" Please input anything first!");
  // add items in array
  taskItems.push(taskInput.value);
  // create new list elements
  createList(taskInput.value);
  createNotification(`Task added : ${taskInput.value}`);
  //   reset the value of taskInput
  taskInput.value = "";
};

const createList = (task) => {
  // create new list, paragraph and a button
  const list = document.createElement("li");
  const taskName = document.createElement("p");
  const removeBtn = document.createElement("button");

  taskName.textContent = task;
  removeBtn.textContent = "Remove";

  // append children to parents
  list.appendChild(taskName);
  list.appendChild(removeBtn);

  // append list to container
  container.appendChild(list);
};

const removeList = (e) => {
  if (e.target.tagName === "BUTTON") {
    // get the index of the element target
    let index = Array.from(
      e.target.parentElement.parentElement.children
    ).indexOf(e.target.parentElement);
    createNotification(`Task deleted : ${taskItems[index]}`);
    // remove a task
    taskItems.splice(index, 1);
    // remove child from the parent
    container.removeChild(e.target.parentElement);
  }
};

const createNotification = (message) => {
  {
    // create list
    const notifContainer = document.querySelector(".notification");
    const notifText = document.createElement("p");
    notifText.textContent = message;
    notifContainer.appendChild(notifText);

    setTimeout(() => {
      notifContainer.removeChild(notifText);
    }, 3000);
  }
};

const toggleClass = (e) => {
  if (e.target.tagName === "P") {
    e.target.nextSibling.classList.toggle("completed-btn");
    e.target.parentElement.classList.toggle("completed");
  }
};

submitBtn.addEventListener("click", addNewTask);
container.addEventListener("click", removeList);
container.addEventListener("click", toggleClass);
