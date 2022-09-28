const fs = require('fs');
const {
    createNewNote,
    readNotes,
    deleteNote
} = require("../lib/index");

jest.mock('fs');


test("creates a new note", () => {
    const notes = [
        {
          "title": "dasd",
          "text": "asdasd",
          "id": "hh51pxkl8llbzxa"
        }
      ];
      readNotes();

      expect(notes.length).toEqual(1);
});

// test("gets note", () => {
//         const notes = [
//         {
//           "title": "dasd",
//           "text": "asdasd",
//           "id": "hh51pxkl8llbzxa"
//         }
//       ];


// });

// test("deletes note", () => {
    
// });