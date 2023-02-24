import toggleCheckbox from './toggle.js';

const submit = document.getElementById('enter-list');
const input = document.querySelector('.todo-input');
const lists = document.querySelector('.to-do-item');

let todoArray = [];

// Get data from the local storage
const getData = () => {
  const data = localStorage.getItem('todoArray');
  if (data) {
    todoArray = JSON.parse(data);
  }
};

// Add data to the local storage
const addData = () => {
  localStorage.setItem('todoArray', JSON.stringify(todoArray));
};

// Add item
const addItem = (description) => {
  const item = {
    description,
    completed: false,
    index: todoArray.length + 1,
  };
  todoArray.push(item);
  addData();
};

// display list and content on the page
const populateList = () => {
  const displayData = todoArray.map(
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

  // toggle checked and unchecked on the list
  toggleCheckbox(todoArray);

  // add event listener to detail buttons
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

  // add event listener to delete buttons
  const deletebtn = document.querySelectorAll('.delete-btn');
  deletebtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const index = parseInt(e.currentTarget.dataset.index, 10);
      todoArray.splice(index - 1, 1);
      for (let i = index - 1; i < todoArray.length; i += 1) {
        todoArray[i].index = i + 1;
      }
      addData();
      populateList();
    });
  });

  // Delete all
  const clearBtn = document.getElementById('clear-btn');
  clearBtn.addEventListener('click', (e) => {
    // eslint-disable-next-line no-unused-vars
    const index = parseInt(e.currentTarget.dataset.index, 10);
    todoArray = todoArray.filter((item) => !item.completed);
    todoArray.forEach((item, index) => {
      item.index = index + 1;
    });
    addData();
    populateList();
  });

  // add event listener to paragraphs for editing
  const paragraphs = document.querySelectorAll('.list-item p');
  paragraphs.forEach((p, i) => {
    p.addEventListener('keydown', (e) => {
      if (e.keyCode === 13) {
        e.preventDefault();
        p.blur();
      }
    });
    p.addEventListener('blur', () => {
      todoArray[i].description = p.textContent.trim;
      addData();
    });
  });
};

// add list when form is submitted
const addlist = () => {
  submit.addEventListener('click', (e) => {
    e.preventDefault();
    const inputData = input.value.trim();
    if (inputData !== '') {
      addItem(inputData);
      input.value = '';
      populateList();
    }
  });
  input.addEventListener('keydown', (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      submit.click();
    }
  });
};

export {
  getData, populateList, addlist, addData,
};
