import Todo from './TodoClass.js';
import displayTasks from './displayTasks.js';

const submit = document.getElementById('enter-list');
const input = document.querySelector('.todo-input');

const todos = new Todo();

const addTask = () => {
  submit.addEventListener('click', (e) => {
    e.preventDefault();
    if (input.value !== '') {
      todos.addTask(input.value);
      input.value = '';
      displayTasks();
    }
  });

  submit.addEventListener('click', (e) => {
    e.preventDefault();
    const inputData = input.value.trim();
    if (inputData !== '') {
      //   addItem(inputData);
      input.value = '';
      displayTasks();
    }
  });
  input.addEventListener('keydown', (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      submit.click();
    }
  });
};

export default addTask;
