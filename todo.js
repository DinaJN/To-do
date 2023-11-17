function addTask() {
    var newTask = document.getElementById("new-task").value;
    if (newTask !== "") {
        var todoList = document.getElementById("todo-list");
        var li = document.createElement("li");
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.onchange = function() {
            li.classList.toggle("completed-task", checkbox.checked);
        };

        li.appendChild(checkbox);
        li.innerHTML += newTask + '<button onclick="removeTask(this)">Remove</button>';
        todoList.appendChild(li);
        document.getElementById("new-task").value = "";
    }
}

function removeTask(button) {
    var listItem = button.parentNode;
    listItem.parentNode.removeChild(listItem);
}
