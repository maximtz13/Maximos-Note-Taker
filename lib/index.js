const fs = require('fs');
const path = require('path');

// function that gets and parses data found in db.json
function readNotes() {
    const notes = fs.readFileSync(path.join(__dirname, '../db/db.json'));
    return JSON.parse(notes);
};

// Function that saves data into formatted json data
function writeNotes(notes) {
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notes, null, 2)
    );
};

// function that creates new notes and pushes that data to the body
function createNewNote(body) {
    const notes = readNotes();
    notes.push(body);
    writeNotes(notes);
};

// function that deletes saved notes
function deleteNote(id) {
    const notes = readNotes();
    const filteredNotes = notes.filter(note => note.id !== id);
    writeNotes(filteredNotes);
    return filteredNotes;
};

module.exports = {
    createNewNote,
    readNotes,
    deleteNote
};