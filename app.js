const ButtonElement = document.getElementById("removeBtn");
const TaskElement = document.getElementById("list");


ButtonElement.addEventListener("click", () =>{
    const MyDiv = document.getElementById("list");
    const removeItem = MyDiv.parentNode;
    TaskElement.innerHTML = MyDiv.value;
    removeItem.removeChild(MyDiv)
})

