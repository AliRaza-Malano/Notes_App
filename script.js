// Store all notes
const notes = [];

// DOM elements
const leftSide = document.getElementById('left');
const inputText = document.getElementById('inputtext');
const addBtn = document.getElementById('addbtn');
const information = document.getElementById('information');

// Add new note
addBtn.addEventListener('click', () => {
    const title = inputText.value.trim();
    const content = information.value.trim();

    if (title && content) {
        notes.push([title, content]);
        renderNotes();
        inputText.value = '';
        information.value = '';
    } else {
        alert('Please enter both title and content');
    }
});

// Render all notes
function renderNotes() {
    leftSide.innerHTML = '';
    notes.forEach((note, index) => {
        const noteElement = document.createElement('div');
        noteElement.className = 'note';
        noteElement.innerHTML = `
            <span>${note[0]}</span>
            <span class="delete-btn" data-index="${index}">×</span>
        `;
        leftSide.appendChild(noteElement);
    });

    // Add delete functionality
    document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const index = parseInt(btn.getAttribute('data-index'));
            notes.splice(index, 1);
            renderNotes();
        });
    });

    // Add click to view content
    document.querySelectorAll('.note').forEach((note, index) => {
        note.addEventListener('click', () => {
            inputText.value = notes[index][0];
            information.value = notes[index][1];
        });
    });
}

// Initialize with some sample notes if needed
notes.push(
    ["Expenses", "The quick brown fox jumps over the lazy dog"],
    ["Portfolio", "The bright sun shines warmly on the quiet countryside"],
    ["Education", "Learning is a continuous process"]
);
renderNotes();