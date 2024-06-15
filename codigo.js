let tasks = [];

document.getElementById('task-form').addEventListener('submit', function(event){

event.preventDefault();
let task={
    description: document.getElementById('description').value,
    date: document.getElementById('date').value
};

tasks.push(task)

// pintar todas las tareas de mi array task
displaytasks();


});

function displaytasks(){
 let taskList=   document.getElementById('task-list')

 taskList.innerHTML='';

 for (let i= 0; i< tasks.length;i++) {
    taskList.innerHTML += `
    <div class="task">
    <p class="_description">
    ${
        tasks[i].description
    }

    </p>
    <p class="finaldate">
    ${
        tasks[i].date
    }
  
    
    
    </p>

    <button class="taskbutton" onclick= "deletetask(${i})">Eliminar</button>


    </div>
    
    `;
   
}
    
 }

function deletetask(taskToDeleteIndex){

tasks.splice(taskToDeleteIndex,1);
displaytasks();

}







