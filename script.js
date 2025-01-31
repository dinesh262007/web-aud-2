let tasks = [];

function addTask() {
    let taskInput = document.getElementById('taskinput');
    let taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task');
        return;
    }
    tasks.push({ text: taskText, completed: false });
    taskInput.value = '';
    showTasks();
}

function showTasks() {
    let taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    for (let i = 0; i < tasks.length; i++) {
        let listItem = document.createElement('li');
        listItem.className = tasks[i].completed ? 'completed' : '';
        listItem.innerHTML = `
            <span>${tasks[i].text}</span>
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
    tasks[index].completed = !tasks[index].completed;
    showTasks();
}

function editTask(index) {
    let newTask = prompt('Enter new task:', tasks[index].text);
    if (newTask !== null && newTask.trim() !== '') {
        tasks[index].text = newTask.trim();
        showTasks();
    }
}

function deleteTask(index) {
    tasks.splice(index, 1);
    showTasks();
}
