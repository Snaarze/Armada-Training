const taskInput = document.querySelector("#task-input");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".task-container");
const body = document.querySelector("body");
let taskItems = [];
let id = 0;

const addNewTask = () => {
  // push item to the array
  if (!taskInput.value) return alert(" Please input anything first!");

  taskItems.push({ id: id, taskName: taskInput.value, isCompleted: false });
  renderData();
  createNotification(`Task added : ${taskInput.value}`);
  id++;
  //   remove the valeu of the input
  taskInput.value = "";
};

const renderData = () => {
  // create new list, paragraph and a button
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  taskItems.forEach((item) => {
    const list = document.createElement("li");
    const taskName = document.createElement("p");
    const removeBtn = document.createElement("button");
    let convertIdToIndex = taskItems.findIndex((task) => task.id === item.id);
    // set values of elements

    // if item is valid retain the dark color
    if (item.isCompleted) {
      list.classList.add("completed");
      removeBtn.classList.add("completed-btn");
    }
    taskName.textContent = item.taskName;
    removeBtn.textContent = "Remove";
    removeBtn.setAttribute("index", convertIdToIndex);

    // append children to parents
    list.appendChild(taskName);
    list.appendChild(removeBtn);

    // append list to container
    container.appendChild(list);
  });
};

const removeList = (e) => {
  if (e.target.tagName === "BUTTON") {
    let index = +e.target.getAttribute("index");
    console.log(index);
    createNotification(`Task deleted : ${taskItems[index].taskName}`);

    taskItems.splice(index, 1);
    container.removeChild(e.target.parentElement);
    console.log(taskItems);
    renderData();
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
    taskItems[+e.target.nextSibling.getAttribute("index")].isCompleted =
      !taskItems[+e.target.nextSibling.getAttribute("index")].isCompleted;
    console.log(
      taskItems[+e.target.nextSibling.getAttribute("index")].isCompleted
    );
    e.target.nextSibling.classList.toggle("completed-btn");
    e.target.parentElement.classList.toggle("completed");
  }
};

submitBtn.addEventListener("click", addNewTask);
container.addEventListener("click", removeList);
container.addEventListener("click", toggleClass);
