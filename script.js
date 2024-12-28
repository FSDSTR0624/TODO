// Select the form and task container
const form = document.getElementById('todo-form');
const taskContainer = document.getElementById('task-container');

// Event listener for form submission
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const taskDesc = document.getElementById('task-desc').value;
    const dueDate = document.getElementById('due-date').value;
    
    // Create a new task item
    const taskItem = document.createElement('div');
    taskItem.classList.add('task-item');
    
    // HTML structure of a task
    taskItem.innerHTML = `
        <p>${taskDesc}</p>
        <p class="status">IN PROGRESS <span>Fecha límite: ${dueDate}</span></p>
        <div class="actions">
            <button class="edit">EDITAR</button>
            <button class="mark-complete">MARCAR COMO FINALIZADA</button>
            <button class="delete">ELIMINAR</button>
        </div>
    `;
    
    // Append task to the container
    taskContainer.appendChild(taskItem);

    // Clear form fields
    document.getElementById('task-desc').value = '';
    document.getElementById('due-date').value = '';

    // Add functionality to the buttons
    addTaskActions(taskItem);
});

// Add functionality to task buttons
function addTaskActions(taskItem) {
    // Delete button
    const deleteBtn = taskItem.querySelector('.delete');
    deleteBtn.addEventListener('click', function() {
        taskItem.remove();
    });

    // Mark as complete button
    const completeBtn = taskItem.querySelector('.mark-complete');
    completeBtn.addEventListener('click', function() {
        taskItem.querySelector('.status').textContent = 'COMPLETED';
        taskItem.querySelector('.status').style.backgroundColor = '#2ecc71';
    });

    // Edit button
    const editBtn = taskItem.querySelector('.edit');
    editBtn.addEventListener('click', function() {
        const taskDesc = taskItem.querySelector('p').textContent;
        const dueDateText = taskItem.querySelector('.status span').textContent.split(': ')[1];

        document.getElementById('task-desc').value = taskDesc;
        document.getElementById('due-date').value = dueDateText;

        taskItem.remove();
    });
}

