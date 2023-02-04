const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");
toDoForm.style.textAlign = "left";
toDoInput.style.textAlign = "left";
toDoList.style.textAlign = "right";

const savedTodos = localStorage.getItem("todos");

let toDos = [];

function paintTodo(newTodoObj) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");

  li.id = newTodoObj.id;
  span.innerText = newTodoObj.text;
  button.innerText = "❌";
  button.addEventListener("click", deleteTodo);

  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
  toDoList.style.color = "white";
  toDoList.style.display = "inline-block";
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDos) => toDos.id !== parseInt(li.id));
  saveTodo();
}

function saveTodo() {
  localStorage.setItem("todos", JSON.stringify(toDos));
}

function handleSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";

  const newTodoObj = {
    id: Date.now(),
    text: newTodo,
  };

  toDos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveTodo();
}

toDoForm.addEventListener("submit", handleSubmit);

if (savedTodos !== null) {
  const parsedToDos = JSON.parse(savedTodos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintTodo);
}
