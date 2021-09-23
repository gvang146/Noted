var noteCount = 0;

function addNote() {
    noteCount++;
    let noteText = document.getElementById('note-text').value;
    let noteBGColor = document.getElementById('selectC').value;
    if(noteText == "") {
        alert("Please add some notes");
    } else {  
    let noteString = '<div id="noteTextContainer'+noteCount+'" class="notes" style="background: '+noteBGColor+';"><p id="noteText'+noteCount+'">'+noteText+'</p><div id="editContainer'+noteCount+'"></div><div class="ede-btns"><button onclick="editNote('+noteCount+')">Edit</button> &nbsp;&nbsp;<button onclick="deleteNote('+noteCount+')">Delete</button></div></div>';
    document.getElementById('note-section').innerHTML += noteString;
    }
}

function deleteNote(id) {
    document.getElementById('noteText'+id).remove();
    document.getElementById('noteTextContainer'+id).remove();
}

function editNote(id) {
    document.getElementById('noteText'+id).style.display = 'none';
    let noteText = document.getElementById('noteText'+id).textContent;
    let editString = '<textarea id="note-text'+id+'" type="text" rows="8" cols="60">'+noteText+'</textarea><br /><select id="selectC'+id+'" for="colors"><option value="#D1D1D1">Gray</option><option value="#8EB8FF">Soft Blue</option><option value="#FFD8D8">Soft Pink</option><option value="#65FF36">Neon Green</option><option value="#FFC00E">Gold</option><option value="#C49CFF">Soft Purple</option></select><div class="save-btn"><button class="saveBtn" onclick="saveNote('+id+')">Save</button></div><br /><br />';
    let textbox = document.getElementById('editContainer'+id).innerHTML = editString;
    document.getElementById('noteTextContainer'+id).innerHTML = textbox;
}

function saveNote(id) {
    let noteText = document.getElementById('note-text'+id).value;
    let noteColor = document.getElementById('selectC'+id).value;
    
    let noteString = '<div id="noteTextContainer'+id+'" class="edit-notes" style="background: '+noteColor+';"><p id="noteText'+id+'">'+noteText+'</p><div id="editContainer'+id+'"></div><div class="ede-btns"><button onclick="editNote('+id+')">Edit</button> &nbsp;&nbsp;<button onclick="deleteNote('+id+')">Delete</button></div></div>';
    document.getElementById('noteTextContainer'+id).style.backgroundColor = noteColor;
    document.getElementById('noteTextContainer'+id).innerHTML = noteString;
}
