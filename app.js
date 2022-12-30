let delform = document.getElementById("removeBtn");
const ButtonElement = document.getElementById("addBtn");
const InputElement = document.getElementById("typing");
const ListElement = document.getElementById("list");



delform.addEventListener("click", () => {
  let i,elements = document.getElementsByClassName("taskForm");
    for (i = elements.length; i--; ) {
        elements[i].parentNode.removeChild(elements[i]);
  }
});



ButtonElement.addEventListener('click', () => {
    let taskForm = document.createElement('div')
    taskForm.classList.add('taskForm')
    taskForm.innerHTML = InputElement.value;
    ListElement.append(taskForm)
})

