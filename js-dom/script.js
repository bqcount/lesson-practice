// const button = document.querySelector('#add-item-button')
// const list = document.querySelector('#items-list')
// let contador = 1;
// button.addEventListener('click', function () {
// 	const li = document.createElement('li')
// 	li.innerText = 'Item number ' + contador
// 	list.appendChild(li)
// 	contador++;
// })



const task = document.getElementById('new-task')
const addButton = document.getElementById('btn-add-task')
const list = document.getElementById('list')
const pendingTasks = document.getElementsByTagName('span')[0]
let taskCounter = 0

function addLiToList() {
	const newTodo = document.createElement('li')
	newTodo.innerHTML = task.value + " <button>Delete</button>"
	list.appendChild(newTodo)

	taskCounter++
	pendingTasks.innerText = taskCounter

	task.value = ''
}

addButton.addEventListener('click', addLiToList)