class Todo {
  constructor() {
    this.tasks = [];
  }

  addTask(description) {
    if (description.trim() === '') {
      return;
    }
    const newTask = {
      description,
      completed: false,
      index: this.tasks.length + 1,
    };
    this.tasks.push(newTask);
    this.saveTasks();
  }

  get allTodo() {
    return this.tasks;
  }

  set allTodo(tasks) {
    this.tasks = tasks;
    this.saveTasks();
  }

  saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  loadTasks() {
    const saveTasks = JSON.parse(localStorage.getItem('tasks'));
    if (saveTasks) {
      this.tasks = saveTasks;
    }
  }
}

export default Todo;
