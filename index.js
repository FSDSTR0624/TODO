let todoTasks = [];
const displayTasks = () => {
          let taskList = document.getElementById('task-list');
          taskList.innerHTML = "";

          for (let task = 0; task < todoTasks.length; task++) {
                    taskList.innerHTML += `
                    <div class="card">
                              <p>${todoTasks[task].description}</p>
                              <p class="details"><span class="${todoTasks[task].status}">${todoTasks[task].status}</span> Deadline ${todoTasks[task].date}</p>
                              <p>
                                        <a id="task-edit-${task}" class="task-edit" href="" data-index="${task}">Edit</a>
                                        <a id="task-done-${task}" class="task-done" href="" data-index="${task}">Mark as done</a>
                                        <a id="task-delete-${task}" class="task-delete" href="" data-index="${task}">Delete</a>
                              </p>
                    </div>`;

                    if (todoTasks[task].done) {
                              document.getElementById(`task-done-${task}`).style.display = "none";
                    }
          }


          for (let task = 0; task < todoTasks.length; task++) {
                    let editButton = document.getElementById(`task-edit-${task}`);
                    let doneButton = document.getElementById(`task-done-${task}`);
                    let deleteButton = document.getElementById(`task-delete-${task}`);

                    if (editButton) {

                              editButton.addEventListener('click', function (event) {
                                        event.preventDefault();
                                        let index = event.target.getAttribute('data-index');
                                        editTask(index);
                              });
                    }

                    if (doneButton) {
                              doneButton.addEventListener('click', function (event) {
                                        event.preventDefault();
                                        let index = event.target.getAttribute('data-index');
                                        doTask(index);
                              });
                    }

                    if (deleteButton) {
                              deleteButton.addEventListener('click', function (event) {
                                        event.preventDefault();
                                        let index = event.target.getAttribute('data-index');
                                        deleteTask(index);
                              });
                    }
          }
};
