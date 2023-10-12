const Note = require("../models/models");

// fetch all notes

module.exports = {

    fetchNotes: async (req, res) => {

        const notes = await Note.find();

        res.json({ notes });

    },

    fetchNote: async (req, res) => {

        const noteId = req.params.id;
        const note = await Note.findById(noteId);

        res.json({ note });

    },

    createNote: async (req, res) => {
        const title = req.body.title;
        const body = req.body.body;

        const note = await Note.create({
            title: title,
            body: body,
        });
        res.json({ note });
    },

    updateNote: async (req, res) => {
        const noteId = req.params.id;

        const { title, body } = req.body;

        await Note.findByIdAndUpdate(noteId, {
            title,
            body,
        })
        const note = await Note.findById(noteId);

        res.json({ note });
    },

    deleteNote: async (req, res) => {

        const noteId = req.params.id;

        await Note.deleteOne({ id: noteId });
        res.json({ sucess: "Record Deleted" });
    },
}