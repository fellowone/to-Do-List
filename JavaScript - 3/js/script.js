// script.js

// Selecting DOM elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const deleteAllBtn = document.getElementById("deleteAllBtn");
const taskList = document.getElementById("taskList");

// Add Task Event
addTaskBtn.addEventListener("click", addTask);

// Delete All Tasks Event
deleteAllBtn.addEventListener("click", deleteAllTasks);

// Function to Add a Task
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Create list item
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";

    // Task Text Span
    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;
    taskSpan.addEventListener("click", () => {
        taskSpan.classList.toggle("completed");
    });

    // Buttons Container
    const buttonGroup = document.createElement("div");

    // Edit Button
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className = "btn btn-warning btn-sm";
    editBtn.addEventListener("click", () => editTask(taskSpan));

    // Delete Button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "btn btn-danger btn-sm";
    deleteBtn.addEventListener("click", () => li.remove());

    // Append buttons to container
    buttonGroup.appendChild(editBtn);
    buttonGroup.appendChild(deleteBtn);

    // Append span and button group to li
    li.appendChild(taskSpan);
    li.appendChild(buttonGroup);

    // Append li to the task list
    taskList.appendChild(li);

    // Clear input
    taskInput.value = "";
}

// Function to Edit Task
function editTask(taskSpan) {
    const newTask = prompt("Edit your task:", taskSpan.textContent);
    if (newTask !== null && newTask.trim() !== "") {
        taskSpan.textContent = newTask.trim();
    }
}

// Function to Delete All Tasks
function deleteAllTasks() {
    if (confirm("Are you sure you want to delete all tasks?")) {
        taskList.innerHTML = "";
    }
}
