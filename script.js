let tasks = [];
let completedTasks = [];

function addTask() {
    let taskInput = document.getElementById('taskinput');
    let taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task');
        return;
    }

    tasks.push(taskText);
    completedTasks.push(false);
    taskInput.value = '';

    showTasks();
}

function showTasks() {
    let taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    for (let i = 0; i < tasks.length; i++) {
        let li = document.createElement('li');
        li.className = completedTasks[i] ? 'completed' : '';

        li.innerHTML = `
        <span>${tasks[i]}</span>
        <div class="buttons">
            <button class="complete-btn" onclick="completeTask(${i})">
                <i class="fa-solid fa-check"></i>
            </button>
            <button class="edit-btn" onclick="editTask(${i})">
                <i class="fa-solid fa-pen"></i>
            </button>
            <button class="delete-btn" onclick="deleteTask(${i})">
                <i class="fa-solid fa-trash"></i>
            </button>
        </div>`;

        taskList.appendChild(li);
    }
}

function completeTask(index) {
    completedTasks[index] = !completedTasks[index];
    showTasks();
}

function editTask(index) {
    let newTask = prompt('Enter new task',tasks[index]);
    if (newTask === null || newTask.trim() === '') {
        return;
    }
    tasks[index] = newTask;
    showTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    completedTasks.splice(index, 1);
    showTasks();
}

 
    
    


      
 

