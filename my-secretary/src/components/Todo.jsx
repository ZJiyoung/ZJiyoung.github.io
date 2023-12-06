const Todo = () => {
  const toDoForm = document.getElementById("todo-form");
  const toDoInput = toDoForm.querySelector("input");
  const toDoList = document.getElementById("todo-list");

  let toDos = [];

  function saveToDos() {
    localStorage.setItem("todos", JSON.stringify(toDos));
  }
  function deleteToDo(event) {
    console.dir(event.target.parentElement);
    console.log(event.target.parentElement.innerText);
    console.log(event.target.parentElement);

    const li = event.target.parentElement;
    li.remove();

    console.log(li.id);
    //����� �� �ż� Ȯ���غ��� number�� �ƴ϶� string�̱�
    console.log(typeof li.id);

    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
  }
  function paintToDo(newTodoObj) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodoObj.text;
    li.id = newTodoObj.id;

    const button = document.createElement("button");
    button.innerText = "X"; //"X" emoji
    button.addEventListener("click", deleteToDo);

    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
  }
  function handleToDoSubmit(event) {
    event.preventDefault();

    const newTodo = toDoInput.value;

    const newTodoObj = {
      text: newTodo,
      id: Date.now(),
    };

    toDoInput.value = "";

    paintToDo(newTodoObj);

    toDos.push(newTodoObj);
    saveToDos();
  }
  toDoForm.addEventListener("submit", handleToDoSubmit);

  const savedToDos = localStorage.getItem("todos");

  console.log(savedToDos);

  function sayHello(item) {
    console.log("Hello! this is the turn of", item);
  }
  if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    parsedToDos.forEach(paintToDo);

    //update toDos
    toDos = parsedToDos;
  } else {
    //
  }

  return (
    <>
      <div>todo</div>
    </>
  );
};

export default Todo;
