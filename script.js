let tasks = []; 
let completedFlags = []; 

function addTask() {
    let taskInput = document.getElementById('taskinput');
    let taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task');
        return;
    }

    tasks.push(taskText);        
    completedFlags.push(false);
    taskInput.value = '';
    showTasks();
}

function showTasks() {
    let taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    for (let i = 0; i < tasks.length; i++) {
        let listItem = document.createElement('li');
        listItem.className = completedFlags[i] ? 'completed' : '';

        listItem.innerHTML = `
            <span>${tasks[i]}</span>
            <div class="buttons">
                <button class="complete-btn" onclick="completeTask(${i})">Completed</button>
                <button class="edit-btn" onclick="editTask(${i})">Edit</button>
                <button class="delete-btn" onclick="deleteTask(${i})">Delete</button>
            </div>
        `;
        taskList.appendChild(listItem);
    }
}

function completeTask(index) {
    completedFlags[index] = !completedFlags[index]; 
    showTasks();
}

function editTask(index) {
    let newTask = prompt('Enter new task:', tasks[index]);
    if (newTask !== null && newTask.trim() !== '') {
        tasks[index] = newTask.trim(); 
        showTasks();
    }
}

function deleteTask(index) {
    tasks.splice(index, 1);         
    completedFlags.splice(index, 1); 
    showTasks();
}

            
