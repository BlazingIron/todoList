
let boxNumber = 0;

document.forms["formAddTodo"].addEventListener
(
    "submit", 
    function(e)
    {
        const errorTxt = document.querySelector(".error");
        
        e.preventDefault();

        if (checkValue(this.todoTxt.value))
        {
            errorTxt.style.display = "none";
            createTodoHTML(this.todoTxt.value);
        }
        else
        {
            errorTxt.style.display = "block";
        }
    }
);

function createTodo () 
{
    const divTodo = document.createElement("div");
    divTodo.className = "todo";

    const checkboxTodo = document.createElement("input");
    checkboxTodo.type = "checkbox";
    checkboxTodo.id = "checkbox";

    const labelTextTodo = document.createElement("label");
    labelTextTodo.htmlFor = "checkbox";
    labelTextTodo.textContent = "Lorem ipsum dolor sit amet.";

    const btnCloseTodo = document.createElement("button");
    btnCloseTodo.className = "btnClose";
    btnCloseTodo.innerHTML = "&times;";

    divTodo.appendChild(checkboxTodo);
    divTodo.appendChild(labelTextTodo);
    divTodo.appendChild(btnCloseTodo);
    
    document.querySelector("#todoList").appendChild(divTodo);
}

function createTodoHTML (todoTxt)
{
    const todoHTML = `
        <div class="todo">
            <input type="checkbox" id="checkbox${boxNumber}">
            <label for="checkbox${boxNumber}">${todoTxt}</label>
            <button onclick="closeTodo(this.previousElementSibling.previousElementSibling, this.parentNode)"
                    class="btnClose">&times;
            </button>
        </div>
    `;

    boxNumber++;
    document.querySelector("#todoList").innerHTML += todoHTML;
}

function closeTodo (box, todo)
{
    if (box.checked)
    {
        if (!confirm("Veux-tu vraiment supprimer cette tâche ?"))
        {
            return;
        }
    }

    document.querySelector("#todoList").removeChild(todo);
}

function checkValue (x)
{
    return (x.length > 2);
}
