let createBtn = document.getElementsByTagName("BUTTON")[0];
let notesContainer = document.getElementsByClassName("notes-container")[0];
let notes = document.getElementsByClassName("input-box");

function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}

showNotes();

function updateStorage(){
    localStorage.setItem("notes",notesContainer.innerHTML);
}

createBtn.addEventListener("click", () =>{
    let inputBox = document.createElement('p');
    let img = document.createElement('img');
    inputBox.className = 'input-box';
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png"
    notesContainer.appendChild(inputBox).appendChild(img);
})

notesContainer.addEventListener("click", (e) => {
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".notes-container");
        notes.forEach(nt => {
            nt.onkeyup = function (){
                updateStorage();
            }
        });
    }
})

document.addEventListener("keydown", (event)=> {
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})

