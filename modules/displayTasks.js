import Todo from './TodoClass.js';

const lists = document.querySelector('.to-do-item');

const displayTasks = () => {
  const todos = new Todo();
  todos.loadTasks();
  const tasks = todos.allTodo;
  const displayData = tasks.map(
    (item) => `
       <div class="list-item">
  <label for="todo-${item.index}">
    <input type="checkbox" name="todo-${item.index}" id="todo-${item.index}" ${
  item.completed ? 'checked' : ''
} />
    <p>${item.description}</p>
  </label>

  <button class="detail-btn" data-index="${item.index}">
    <i class="fa-solid fa-ellipsis-vertical" id="vertical"></i>
  </button>

  <button class="delete-btn hide" data-index="${item.index}">
    <i class="fa-regular fa-trash-can" id="trash"></i>
  </button>
</div>
<hr />
    `,
  );
  lists.innerHTML = displayData.join(' ');

  const chbox = document.querySelectorAll('input[type="checkbox"]');
  chbox.forEach((check, i) => {
    check.addEventListener('click', () => {
      tasks[i].completed = !tasks[i].completed;
      todos.saveTasks();
    });
  });

  const detailbtn = document.querySelectorAll('.detail-btn');
  detailbtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const index = parseInt(e.currentTarget.dataset.index, 10);
      const deletebtn = document.querySelector(
        `.delete-btn[data-index="${index}"]`,
      );
      deletebtn.classList.remove('hide');
      btn.classList.add('hide');

      // make the paragraph editable
      const p = e.currentTarget.parentNode.querySelector('p');
      p.contentEditable = true;
      p.focus();
    });
  });

  const deletebtn = document.querySelectorAll('.delete-btn');
  deletebtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const index = parseInt(e.currentTarget.dataset.index, 10);
      tasks.splice(index - 1, 1);
      for (let i = index - 1; i < tasks.length; i += 1) {
        tasks[i].index = i + 1;
      }
      todos.saveTasks();
      displayTasks();
    });
  });

  const paragraphs = document.querySelectorAll('.list-item p');
  paragraphs.forEach((p, i) => {
    p.addEventListener('keydown', (e) => {
      if (e.keyCode === 13) {
        e.preventDefault();
        p.blur();
      }
    });
    p.addEventListener('blur', () => {
      tasks[i].description = p.textContent.trim;
      todos.saveTasks();
    });
  });
};

export default displayTasks;
