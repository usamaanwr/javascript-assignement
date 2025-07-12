var inputbox = document.getElementById("input_box");
var listcontainer = document.getElementById("list_container");

function addTask() {
    if (inputbox.value === "") {
        alert("You must write something");
    } else {
        var li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li);

        var span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputbox.value = "";
    saveData();
}

listcontainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked"); // fixed typo here
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove(); // fixed typo here
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listcontainer.innerHTML);
}

function showTask() {
    listcontainer.innerHTML = localStorage.getItem("data");
}

showTask();
