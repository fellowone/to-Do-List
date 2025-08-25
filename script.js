// Select DOM elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const deleteAllBtn = document.getElementById("deleteAllBtn");
const taskList = document.getElementById("taskList");

// Add Task Event
addTaskBtn.addEventListener("click", addTask);

// Allow pressing Enter to add a task
taskInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});

// Delete All Tasks Event
deleteAllBtn.addEventListener("click", deleteAllTasks);

// Function to add a task
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Create <li> element
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";

    // Create span for task text
    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;

    // Toggle completed task on click
    taskSpan.addEventListener("click", () => {
        taskSpan.classList.toggle("completed");
    });

    // Create button container
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

    // Append task text and buttons to <li>
    li.appendChild(taskSpan);
    li.appendChild(buttonGroup);

    // Append <li> to the list
    taskList.appendChild(li);

    // Clear input field
    taskInput.value = "";
}

// Function to edit a task
function editTask(taskSpan) {
    const updatedTask = prompt("Edit your task:", taskSpan.textContent);
    if (updatedTask !== null && updatedTask.trim() !== "") {
        taskSpan.textContent = updatedTask.trim();
    }
}

// Function to delete all tasks
function deleteAllTasks() {
    if (confirm("Are you sure you want to delete all tasks?")) {
        taskList.innerHTML = "";
    }
}
