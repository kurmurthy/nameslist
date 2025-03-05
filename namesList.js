let namesItemsContainer = document.getElementById("namesItemsContainer");
let addTodoButton = document.getElementById("addTodoButton");

let nameList = [
    {
        text:"Kurmurthy",
        uniqueNumber:1,
    },
    {
        text:"Mokshith",
        uniqueNumber:2,
    },
    {
        text:"Akshay",
        uniqueNumber:3,
    },
    
];

let todoCount = todoList.lenght

function onDeleteToDo(nameId){
    let nameElement= document.getElementById(nameId);
    namesItemsContainer.removeChild(nameElement);
    
    
}
function onToDoStatusChanged(checkboxId,labelId){
    let checkboxElement = document.getElementById(checkboxId);
    let labelElement  = document.getElementById(labelId);
     labelElement.classList.toggle("checked");
    
}
function createAndAppendTodo(name){
    let checkboxId = "checkbox" + name.uniqueNumber;
    let labelId = "label" + name.uniqueNumber;
    let nameId = "name" + name.uniqueNumber;
    
    
    let nameElement = document.createElement("li");
nameElement.classList.add("name-item-container","d-flex","flex-row");
nameElement.id = nameId;
namesItemsContainer.appendChild(nameElement);

let inputElement = document.createElement("input");
inputElement.type = "checkbox";
inputElement.id = checkboxId ;
inputElement.classList.add("checkbox-input");

inputElement.onclick = function(){
    onToDoStatusChanged(checkboxId,labelId);
};
nameElement.appendChild(inputElement);

let labelContainer = document.createElement("div");
labelContainer.classList.add("label-container","d-flex","flex-row");
nameElement.appendChild(labelContainer);

let labelElement = document.createElement("label");
labelElement.setAttribute("for",checkboxId );
labelElement.classList.add("checkbox-label");
labelElement.textContent = name.text;
labelElement.id = labelId;
labelContainer.appendChild(labelElement);

let deleteContainer = document.createElement("div");
deleteContainer.classList.add("delete-container");
labelContainer.appendChild(deleteContainer);

let deleteIconEl = document.createElement("i");
deleteIconEl.classList.add("far","fa-trash-alt", "delete-icon");

deleteIconEl.onclick = finction(){
    onDeleteToDo(nameId)
}
deleteContainer.appendChild(deleteIconEl);
}


for (let name of nameList){
    createAndAppendTodo(name);
}


function onAddTodo(){
    let userInputElement = document.getElementById("todoUserInput");
    let userInputValue = userInputElement.value;
    if(userInputValue === ""){
        alert("Enter Valid Text")
        return;
    }
    todoCount = todoCount + 1

    let newTodo = {
        text:userInputValue,
        uniqueNumber:todoCount,
    }
    createAndAppendTodo(newTodo)
    userInputElement.value = "",
}

addTodoButton.onclick = function(){
    onAddTodo()
}
