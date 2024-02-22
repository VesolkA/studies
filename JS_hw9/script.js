document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('button').addEventListener('click', addTask);
    document.querySelectorAll('button')[1].addEventListener('click', clearList);
});

function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if (taskText !== "") {
        let tasksContainer = document.getElementById("tasks");

        let taskDiv = document.createElement("div");
        taskDiv.className = "task";

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener("change", toggleTask);

        let taskLabel = document.createElement("span");
        taskLabel.textContent = taskText;

        let editButton = document.createElement("button");
        editButton.textContent = "Редактировать";
        editButton.addEventListener("click", function () {
            editTask(taskLabel);
        });

        taskDiv.appendChild(checkbox);
        taskDiv.appendChild(taskLabel);
        taskDiv.appendChild(editButton);

        tasksContainer.appendChild(taskDiv);
        taskInput.value = "";
    }
}

function toggleTask() {
    let taskLabel = this.nextElementSibling;
    taskLabel.classList.toggle("completed", this.checked);
}

function editTask(taskLabel) {
    let newText = prompt("Внесите изменения:", taskLabel.textContent);
    if (newText !== null) {
        taskLabel.textContent = newText.trim();
    }
}

function clearList() {
    let tasksContainer = document.getElementById("tasks");
    tasksContainer.innerHTML = "";
}
