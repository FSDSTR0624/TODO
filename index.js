document.addEventListener("DOMContentLoaded", () => {
  // Seleccionamos los elementos del formulario y la lista de tareas
  const taskForm = document.getElementById("task-form");
  const taskList = document.getElementById("task-list");

  // Añadimos un evento 'submit' al formulario para agregar tareas
  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    addTask();
  });

  // Función para agregar una nueva tarea a la lista
  function addTask() {
    // Obtenemos los valores de la descripción y la fecha de la tarea
    const desc = document.getElementById("task-desc").value;
    const date = document.getElementById("task-date").value;

    // Formateamos la fecha al formato DD/MM/AAAA
    const formattedDate = formatDate(date);

    // Creamos un nuevo elemento div para la tarea
    const taskDiv = document.createElement("div");

    // Establecemos el contenido HTML del div de la tarea
    taskDiv.innerHTML = `
            <p>${desc}</p>
            <p class="details"><span class="in-progress">En progreso</span> Fecha límite ${formattedDate}</p>
            <p>
                <a href="#" class="edit">Editar</a>
                <a href="#" class="mark-done">Marcar como finalizada</a>
                <a href="#" class="unmark-done" style="display:none;">Desmarcar como finalizada</a>
                <a href="#" class="remove">Eliminar</a>
            </p>
        `;

    // Añadimos el nuevo div a la lista de tareas
    taskList.appendChild(taskDiv);

    // Limpiamos los campos del formulario
    document.getElementById("task-desc").value = "";
    document.getElementById("task-date").value = "";

    // Añadimos los eventos a los botones de la tarea
    attachTaskEvents(taskDiv);
  }

  // Función para añadir eventos a los botones de una tarea
  function attachTaskEvents(taskDiv) {
    const editBtn = taskDiv.querySelector(".edit");
    const markDoneBtn = taskDiv.querySelector(".mark-done");
    const unmarkDoneBtn = taskDiv.querySelector(".unmark-done");
    const removeBtn = taskDiv.querySelector(".remove");

    // Evento para editar la tarea
    editBtn.addEventListener("click", (e) => {
      e.preventDefault();
      editTask(taskDiv);
    });

    // Evento para marcar la tarea como finalizada
    markDoneBtn.addEventListener("click", (e) => {
      e.preventDefault();
      markTaskDone(taskDiv);
    });

    // Evento para desmarcar la tarea como finalizada
    unmarkDoneBtn.addEventListener("click", (e) => {
      e.preventDefault();
      unmarkTaskDone(taskDiv);
    });

    // Evento para eliminar la tarea
    removeBtn.addEventListener("click", (e) => {
      e.preventDefault();
      removeTask(taskDiv);
    });
  }

  // Función para editar la descripción y la fecha de una tarea
  function editTask(taskDiv) {
    const desc = prompt(
      "Edita la descripción de la tarea",
      taskDiv.children[0].innerText
    );
    const dateStr = taskDiv.children[1].innerText.split("Fecha límite")[1];
    const [day, month, year] = dateStr.split("/");
    const date = `${year}-${month}-${day}`;

    const newDate = prompt("Edita la fecha límite", date);
    const formattedDate = formatDate(newDate);

    if (desc !== null && newDate !== null) {
      taskDiv.children[0].innerText = desc;
      taskDiv.children[1].innerHTML = `<span class="in-progress">En progreso</span> Fecha límite ${formattedDate}`;
    }
  }

  // Función para marcar una tarea como finalizada
  function markTaskDone(taskDiv) {
    const span = taskDiv.querySelector("span.in-progress");
    if (span) {
      span.classList.remove("in-progress");
      span.classList.add("done");
      span.innerText = "Finalizado";
    }
    taskDiv.querySelector(".mark-done").style.display = "none";
    taskDiv.querySelector(".unmark-done").style.display = "inline";
  }

  // Función para desmarcar una tarea como finalizada
  function unmarkTaskDone(taskDiv) {
    const span = taskDiv.querySelector("span.done");
    if (span) {
      span.classList.remove("done");
      span.classList.add("in-progress");
      span.innerText = "En progreso";
    }
    taskDiv.querySelector(".unmark-done").style.display = "none";
    taskDiv.querySelector(".mark-done").style.display = "inline";
  }

  // Función para eliminar una tarea de la lista
  function removeTask(taskDiv) {
    taskDiv.remove();
  }

  // Función para formatear una fecha en el formato DD/MM/AAAA
  function formatDate(date) {
    const [year, month, day] = date.split("-");
    return `${day}/${month}/${year}`;
  }
});