import { addData } from './app'

const toggleCheckbox = (todoArray) => {
  const chbox = document.querySelectorAll('input[type="checkbox"]')
  chbox.forEach((check, i) => {
    check.addEventListener('click', () => {
      todoArray[i].completed = !todoArray[i].completed
      addData(todoArray)
    })
  })
}

export default toggleCheckbox
