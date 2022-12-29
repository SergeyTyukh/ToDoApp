const ButtonElement = document.querySelector("#removeBtn");
const TaskElement = document.querySelector("#taskForm");


ButtonElement.addEventListener("click", () =>{
    let RemoveItem = document.removeElement('div')
    RemoveItem.innerHTML = TaskElement.value;
    TaskElement.removeChild(RemoveItem)
})

ButtonElement();