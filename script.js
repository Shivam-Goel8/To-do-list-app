const inputBox = document.querySelector('#input-box');
const listContainer = document.querySelector('.ul_container');

function addTask() {
    if (inputBox.value === '') {   
        alert("Write something to add a task");
    } else {    
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;  
        listContainer.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = '\u00d7'
        li.appendChild(span)
    }
    inputBox.value = ""
    savedata()
}

listContainer.addEventListener("click", function(e){
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle("checked")
        savedata()
    }
    else if(e.target.tagName === 'SPAN'){   
        e.target.parentElement.remove();
        savedata()
    }
})

function savedata() {
    localStorage.setItem("data", listContainer.innerHTML)
}
function showTask() {
    listContainer.innerHTML =  localStorage.getItem("data")
}
showTask(); 



 
