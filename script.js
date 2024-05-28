body {
    margin: 0;
    font-family: Arial, sans-serif;
    display: flex;
    height: 100vh;
}

.app-container {
    display: flex;
    width: 100%;
}

.sidebar {
    width: 250px;
    background: #f4f4f4;
    padding: 10px;
    border-right: 1px solid #ddd;
}

.sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.notebook-list {
    list-style-type: none;
    padding: 0;
}

.notebook-list li {
    padding: 10px;
    border-bottom: 1px solid #ddd;
}

.main-content {
    flex: 1;
    display: flex;
    flex-direction: column;
}

.top-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #ddd;
}

#searchBar {
    width: 80%;
    padding: 5px;
}

.notes-container {
    flex: 1;
    padding: 10px;
}

#addNoteBtn {
    padding: 10px;
    margin-bottom: 10px;
}

.notes-list {
    display: flex;
    flex-direction: column;
}

.notes-list .note-item {
    padding: 10px;
    border-bottom: 1px solid #ddd;
    cursor: pointer;
}
