const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value;
    if (taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(li);
        });
        li.appendChild(deleteButton);
        taskList.appendChild(li);
        taskInput.value = '';
    }
});


// Load tasks from local storage
window.onload = () => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = task;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(li);
            saveTasks();
        });
        li.appendChild(deleteButton);
        taskList.appendChild(li);
    });
};

// Save tasks to local storage
function saveTasks() {
    const tasks = [];
    taskList.querySelectorAll('li').forEach(li => {
        tasks.push(li.firstChild.textContent);
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}