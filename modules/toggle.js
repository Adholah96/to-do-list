const toggleCheckbox = (todoArray) => {
  const chbox = document.querySelectorAll('input[type="checkbox"]');
  chbox.forEach((check, i) => {
    check.addEventListener('click', () => {
      todoArray[i].completed = !todoArray[i].completed;
      localStorage.setItem('todoArray', JSON.stringify(todoArray));
    });
  });
};

export default toggleCheckbox;
