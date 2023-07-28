const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    const taskItem = createTaskItem(taskText);
    taskList.appendChild(taskItem);
    taskInput.value = "";
  }
}

function createTaskItem(text) {
  const li = document.createElement("li");
  const taskText = document.createElement("span");
  taskText.textContent = text;
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.onclick = () => {
    li.remove();
  };
  li.appendChild(taskText);
  li.appendChild(deleteButton);
  return li;
}
