const router = require('express').Router();
const { createNewNote, readNotes, deleteNote } = require('../../lib/index');
const uniqid = require('uniqid');

router.get('/notes', (req, res) => {
    res.json(readNotes());
});

router.post('/notes', (req, res) => {
    if (!req.body.title) {
        res.status(400).send('The note did not contain a title.');
    } else {
        req.body.id = uniqid();
        createNewNote(req.body);
        res.json(req.body);
    }
});

router.delete('/notes/:id', (req, res) => {
    const updatedNotes = deleteNote(req.params.id);
    res.json(updatedNotes);
});

module.exports = router;