const toDoForm = document.querySelector('#todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('#todo-list');

const TODOS_KEY = 'todos';
let toDos = [];

getTodos();

toDoForm.addEventListener('submit', onSubmit);

function getTodos() {
    const savedTodos = localStorage.getItem(TODOS_KEY);
    if (savedTodos !== null) {
        const parsedTodos = JSON.parse(savedTodos);
        toDos = parsedTodos;
        parsedTodos.forEach(paintTodo);
    }
}

function onSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = '';
    const newTodoObj = {
        id: Date.now(),
        text: newTodo
    };
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos();
}

function saveTodos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}



function paintTodo(newTodo) {
    const li = document.createElement('li');
    li.id = newTodo.id;
    const span = document.createElement('span');
    span.innerText = newTodo.text;
    const button = document.createElement('button');
    button.innerText = '❌';
    button.addEventListener('click', deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => String(toDo.id) !== li.id);
    saveTodos();
}
