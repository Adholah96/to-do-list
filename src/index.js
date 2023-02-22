import './style.css'

const lists = document.querySelector('.to-do-item')

let todoArray = [
  {
    description: 'wash the dishes',
    completed: false,
    index: 1,
  },
  {
    description: 'complete To Do list project',
    completed: false,
    index: 2,
  },
]

const populateList = () => {
  let displayData = todoArray.map((item) => {
    return `
    <div class="list-item">
          <label for="todo"
            ><input type="checkbox" name="todo" id="todo" /> ${item.description}</label
          ><i class="fa-solid fa-ellipsis-vertical"></i>
        </div>
        <hr />
    
    `
  })
  lists.innerHTML = displayData.join(' ')
}

window.addEventListener('DOMContentLoaded', () => {
  populateList()
})
