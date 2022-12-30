document.getElementById('removeBtn').onclick = function () {
    let i, elements = document.getElementsByClassName('taskForm');
    for (i = elements.length; i--;) {         
      elements[i].parentNode.removeChild(elements[i]);
    }
}         