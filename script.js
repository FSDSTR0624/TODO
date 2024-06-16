let tasks = [];

document
  .getElementById("task-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let task = {
      description: document.getElementById("description").value,
      date: document.getElementById("date").value,
    };

    tasks.push(task);

    // Pintar todas las tareas de mi array tasks
    displayTasks();
  });

function displayTasks() {
  let taskList = document.getElementById("task-list");

  taskList.innerHTML = "";

  for (let i = 0; i < tasks.length; i++) {
    taskList.innerHTML += `
      <div>
        <p>${tasks[i].description}</p>
        <p>${tasks[i].date}</p>
        <button onclick="deleteTask(${i})">Eliminar</button>
        <button onclick="deleteTask(${i})">Editar</button>
      </div>
    `;
  }
}

function deleteTask(taskToDeleteIndex) {
  tasks.splice(taskToDeleteIndex, 1);
  displayTasks();
}