const taskInput = document.querySelector("#task-input");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".task-container");
const body = document.querySelector("body");
let taskItems = [];
let id = 0;

const addNewTask = (e) => {
  // push item to the array
  if (!taskInput.value) return alert(" Please input anything first!");

  taskItems.push(taskInput.value);
  renderData(taskInput.value);
  //   remove the valeu of the input
  taskInput.value = "";
  showNotification(e.target);

  id++;
};

const renderData = (taskInput) => {
  // create new list, paragraph and a button
  const list = document.createElement("li");
  const taskName = document.createElement("p");
  const removeBtn = document.createElement("button");

  // set values of elements
  taskName.textContent = taskInput;
  removeBtn.textContent = "Remove";
  removeBtn.setAttribute("index", id);

  // append children to parents
  list.appendChild(taskName);
  list.appendChild(removeBtn);

  // append list to container
  container.appendChild(list);
};

const removeList = (e) => {
  if (e.target.tagName === "BUTTON") {
    showNotification(e.target);
    taskItems.splice(+e.target.getAttribute("index"), 1);
    container.removeChild(e.target.parentElement);
  }
};

const showNotification = (e) => {
  // if add task has beeen click log the current task being added
  if (e.value === "Add Task") {
    return createNotification(
      ` Task added : ${taskItems[taskItems.length - 1]} `
    );
  }

  if (e.tagName === "BUTTON") {
    createNotification(
      `Task deleted : ${taskItems[+e.getAttribute("index")]} `
    );
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
    e.stopPropagation;
    e.target.nextSibling.classList.toggle("completed-btn");
    e.target.parentElement.classList.toggle("completed");
  }
};

submitBtn.addEventListener("click", addNewTask);
container.addEventListener("click", removeList);
container.addEventListener("click", toggleClass);
