document.addEventListener("DOMContentLoaded", () => {
  let form = document.getElementById('create-task-form');
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    let taskInput = document.getElementById('new-task-description');
    let taskDescription = taskInput.value;
    let taskList = document.getElementById('tasks');
    let newTaskItem = document.createElement('li');
    newTaskItem.textContent = taskDescription;
    taskList.appendChild(newTaskItem);
    taskInput.value = '';
  })
});

let deleteButton = document.createElement('button')
deleteButton.textContent = 'x';
deleteButton.addEventListener('click', function () {
  newTaskItem.remove();

newTaskItem.appendChild(deleteButton);
taskList.appendChild(newTaskItem);

taskDescriptionInput.value = '';