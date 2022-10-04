const toDoList = document.querySelector('ul')
const tasks = Array.from(toDoList.children)

const toggleCompleteTask = event => {
  const clickedElement = event.target
  const isDone = clickedElement.style.textDecoration

  if (!isDone) {
    clickedElement.style.textDecoration = 'line-through'
    return
  }

  clickedElement.style.textDecoration = ''
}

tasks.forEach(task => {
  task.addEventListener('click', toggleCompleteTask)
})