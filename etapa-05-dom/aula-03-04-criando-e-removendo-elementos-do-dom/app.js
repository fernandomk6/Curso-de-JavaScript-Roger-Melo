const toDoList = document.querySelector('ul')
const mainButton = document.querySelector('button')
const tasks = Array.from(toDoList.children)

tasks.forEach(task => {
  task.addEventListener('click', e => {
    e.target.remove()
  })
})

mainButton.addEventListener('click', () => {
  const newTask = document.createElement('li')
  newTask.innerText = 'Novo Item'
  
  toDoList.append(newTask)
})