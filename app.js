let delform = document.getElementById("removeBtn");
const ButtonElement = document.getElementById("addBtn");
const InputElement = document.getElementById("typing");
const ListElement = document.getElementById("list");
const FormElement = document.getElementById("general");
const RemoveElement = document.getElementsByClassName("taskForm");

//remove all tasks
delform.addEventListener("click", () => {
  let i,elements = document.getElementsByClassName("taskForm");
    for (i = elements.length; i--; ) {
        elements[i].parentNode.removeChild(elements[i]);
      }
    });
  
  
  //add task
  FormElement.addEventListener("submit", (event) => {
    let taskForm = document.createElement("div");
    let taskaddBtn = document.createElement("button");
    taskaddBtn.id = "checkBtn";
    taskaddBtn.className = "check";
    let taskPoint = document.createElement("div");
    taskPoint.className = "text";
    let taskdelBtn = document.createElement("button");
    taskdelBtn.id = "delBtn";
    taskdelBtn.className = "delete";
    
    taskForm.classList.add("taskForm");
    taskPoint.innerHTML = InputElement.value;
    taskForm.appendChild(taskaddBtn);
    taskForm.appendChild(taskPoint);
    taskForm.appendChild(taskdelBtn);
    ListElement.appendChild(taskForm);
    event.preventDefault();
    
    taskdelBtn.addEventListener('click', () => {
      ListElement.removeChild(taskForm);
    });
    taskaddBtn.addEventListener('click', () => {
        taskaddBtn.className = "complete";
        taskPoint.className = "textcompleted";
  })
});
  
  


     
