import displayTasks from './displayTasks.js';

const clearAllTask = () => {
  const clearBtn = document.getElementById('clear-btn');
  clearBtn.addEventListener('click', () => {
    let todoList = JSON.parse(localStorage.getItem('tasks'));
    todoList = todoList.filter((task) => !task.completed);
    todoList.forEach((item, index) => {
      item.index = index + 1;
    });
    localStorage.setItem('tasks', JSON.stringify(todoList));
    displayTasks();
  });
};

export default clearAllTask;
