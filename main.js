"use strict";

const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");
const addTaskBtn = document.getElementById("add-task-btn");
const filterSelect = document.getElementById("filter-select");

function renderTask(task) {
  const li = document.createElement("li");
  li.classList.add("task-item");

  const taskTextSpan = document.createElement("span");
  taskTextSpan.textContent = task;
  taskTextSpan.classList.add("task-text");

  const checkBtn = document.createElement("button");
  checkBtn.textContent = "✓";
  checkBtn.classList.add("btn", "check-btn");
  checkBtn.onclick = toggleTask;

  const cancelBtn = document.createElement("button");
  cancelBtn.textContent = "✖";
  cancelBtn.classList.add("btn", "cancel-btn");
  cancelBtn.onclick = deleteTask;

  li.appendChild(taskTextSpan);
  li.appendChild(checkBtn);
  li.appendChild(cancelBtn);
  taskList.appendChild(li);

  filterTasks(); // Apply filter immediately after adding task
}

function addTask(event) {
  event.preventDefault();
  const taskText = taskInput.value;
  if (taskText) {
    renderTask(taskText);
    taskInput.value = "";
  }
}

function addTask(event) {
  event.preventDefault();
  const taskText = taskInput.value;
  if (taskText) {
    renderTask(taskText);
    taskInput.value = "";
  } else {
    alert("Fill in your list"); // Alert if the input is empty
  }
}

function toggleTask(event) {
  const taskItem = event.target.parentElement;
  taskItem.classList.toggle("completed");
  filterTasks(); // Apply filter when task is toggled
}

function deleteTask(event) {
  event.target.parentElement.remove();
  filterTasks(); // Apply filter when task is deleted
}

function filterTasks() {
  const tasks = document.querySelectorAll(".task-item");
  const filterValue = filterSelect.value;

  tasks.forEach((task) => {
    task.classList.remove("hidden");

    if (filterValue === "finished" && !task.classList.contains("completed")) {
      task.classList.add("hidden");
    } else if (
      filterValue === "unfinished" &&
      task.classList.contains("completed")
    ) {
      task.classList.add("hidden");
    }
  });
}

addTaskBtn.addEventListener("click", addTask);
taskInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addTask(event);
  }
});
filterSelect.addEventListener("change", filterTasks);
