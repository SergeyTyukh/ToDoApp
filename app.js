let delform = document.getElementById("removeBtn");

delform.addEventListener("click", () => {
  let i,
    elements = document.getElementsByClassName("taskForm");
  for (i = elements.length; i--; ) {
    elements[i].parentNode.removeChild(elements[i]);
  }
});
