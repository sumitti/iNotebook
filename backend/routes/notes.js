const express = require('express');
const router = express.Router();
const fetchUser = require('../middleware/fetchuser');
const Notes = require('../models/Notes');
const { body, validationResult } = require('express-validator');

// Get the user all notes by using  GET::/api/notes/fetchallnotes : Login required

router.get('/fetchallnotes', fetchUser, async (req, res) => {
    try {
        const notes = await Notes.find({ user: req.user.id });
        res.status(200).json(notes);
    } catch (error) {
        console.log(error.message);
        res.status(500).send('Internal Server error');
    }
});

// Add the user notes by using  POST::/api/notes/addnote : Login required

router.post('/addnote', fetchUser, [
    body('title', 'Title is required').isLength({ min: 3 }),
    body('description', 'Description is required').isLength({ min: 6 })
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array().map(err => err.msg) });
    }
    try {
        const { title, description, tag } = req.body;
        const note = new Notes({
            title, description, tag, user: req.user.id
        });
        const savenote = await note.save();
        res.status(200).json({ message: "Notes added successfully", savenote });

    } catch (error) {
        console.log(error.message)
        res.status(500).json("Internal server error");
    }
});

// Update the user notes with id by using  PUT::/api/notes/updatenote : Login required

router.put('/updatenote/:id', fetchUser, [
    body('title', 'Title is required').isLength({ min: 3 }),
    body('description', 'Description is required').isLength({ min: 6 })
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array().map(err => err.msg) });
    }
    try {
        const { title, description, tag } = req.body;
        // Create new Notes Object
        const newNote = {};
        if (title) { newNote.title = title };
        if (description) { newNote.description = description };
        if (tag) { newNote.tag = tag };

        // Find note and update it
        let note = await Notes.findById(req.params.id);
        if (!note) {
            return res.send(404).send('Not found');
        }
        if (note.user.toString() !== req.user.id) {
            return res.send(404).send('Not allowed');
        }
        note = await Notes.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true });
        res.json({ message: 'Notes updated successfully', note });

    } catch (error) {
        console.log(error.message)
        res.status(500).json("Internal server error");
    }
});

// Delete the user note with id by using DELETE::/api/notes/deletenote : Login required

router.delete('/deletenote/:id', fetchUser, async (req, res) => {
   
    try {               
        // Find note and delete it
        let note = await Notes.findById(req.params.id);
        
        if (!note) {
            return res.status(404).send('Not found');
        }
        if (note.user.toString() !== req.user.id) {
            return res.status(404).send('Not allowed');
        }
        note = await Notes.findByIdAndDelete(req.params.id);
        res.json({ message: 'Notes deleted successfully'});

    } catch (error) {
        console.log(error.message)
        res.status(500).json("Internal server error");
    }
});


module.exports = router;