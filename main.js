// 此處為您的程式碼!
const list = document.getElementById("list");
const newTodo = document.getElementById("new_Todo");
const TodoList = document.getElementById("todo");
const todo = JSON.parse(localStorage.getItem("todo"));

if (todo) {
    todo.forEach((todo) => {
        addtodo(todo);
    });
}

list.addEventListener("submit", (e) => {
    e.preventDefault();

    addtodo();
});

function addtodo(todo) {
    let Text = newTodo.value;

    if (todo) {
        Text = todo.Text;
    }

    if (Text) {
        const todoN = document.createElement("li");
        if (todo && todo.comp) {
            todoN.classList.add("completed");
        }

        todoN.innerText = Text;

        todoN.addEventListener("click", () => {
            todoN.classList.toggle("completed");
            update();
        });

        todoN.addEventListener("contextmenu", (e) => {
            e.preventDefault();
            todoN.remove();
            update();
        });

        TodoList.appendChild(todoN);
        newTodo.value = "";
        update();
    }
}

function update() {
    const todoN = document.querySelectorAll("li");
    const todo = [];

    todoN.forEach((todoN) => {
        todo.push({
            text: todoN.innerText,
            completed: todoN.classList.contains("completed")
        });
    });

    localStorage.setItem("todo", JSON.stringify(todo));
}

function switchClass(name) {
    document.body.className = name;
}

var i = 1;
function change() {
    if (i == 0) {
        switchClass('light');
        i++
    } else if (i == 1) {
        switchClass('dark');
        i--
    }
}