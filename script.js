document.getElementById('addNoteBtn').addEventListener('click', addNote);
document.getElementById('addNotebookBtn').addEventListener('click', addNotebook);

function addNote() {
    const notesList = document.querySelector('.notes-list');
    const noteItem = document.createElement('div');
    noteItem.classList.add('note-item');
    noteItem.textContent = 'New Note';
    notesList.appendChild(noteItem);
}

function addNotebook() {
    const notebookList = document.querySelector('.notebook-list');
    const notebookItem = document.createElement('li');
    notebookItem.textContent = 'New Notebook';
    notebookList.appendChild(notebookItem);
}
