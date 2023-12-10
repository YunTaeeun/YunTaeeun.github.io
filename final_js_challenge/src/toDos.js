const toDoForm = document.querySelector("#todos");
const toDosInput = document.querySelector("#todos input");
const toDoList = document.querySelector("#todolist");

/* 투두 인풋을 받아서 투루 ul에 지울수 있는 버튼과 함께 추가한다.
또한 date.now 랑 같이 로컬에 저장 한다. */

let toDos = [];

function saveToDo() {
  localStorage.setItem("toDos", JSON.stringify(toDos));
}

function deleteToDo(event) {
  const deleteLi = event.target.parentElement;
  deleteLi.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(deleteLi.id));
  saveToDo();
}

function printToDo(toDo) {
  const li = document.createElement("li");
  li.id = toDo.id;
  const span = document.createElement("span");
  span.innerText = toDo.text;
  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function makeToDos(event) {
  event.preventDefault();
  const toDo = toDosInput.value;
  const toDoid = {
    text: toDo,
    id: Date.now(),
  };
  toDos.push(toDoid);
  printToDo(toDoid);
  toDosInput.value = "";
  saveToDo();
}

toDoForm.addEventListener("submit", makeToDos);

const savedToDo = localStorage.getItem("toDos");

console.log(savedToDo);

if (savedToDo) {
  const parsedToDos = JSON.parse(savedToDo);
  toDos = parsedToDos;
  parsedToDos.forEach(printToDo);
}
