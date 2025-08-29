import { useState } from "react";
import NoteContext from "./noteContext";


const NoteState = (props) => {
    const host = `${process.env.REACT_APP_URL}`
    const notesInitial = []

    const [notes, setNotes] = useState(notesInitial);

    //Get all notes
    const getNotes = async () => {
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            }
        });
        const json = await response.json();
        setNotes(json);
    }

    //Add a Notes
    const addNote = async (title, description) => {
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({ title, description })
        });
        // eslint-disable-next-line
        const json = await response.json();
        
        const note = {
            "_id": '5',
            "user": '5',
            "title": title,
            "description": description,
            "tag": "personal",
            "date": new Date().toISOString(),
            "__v": 0
        }
        setNotes(notes.concat(note))
    }

    //Delete a Notes
    const deleteNote = async (id) => {
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            }
        });
        // eslint-disable-next-line
        const json = await response.json();
        
        const newNotes = notes.filter((note) => { return note._id !== id });
        setNotes(newNotes);
    }

    //Update a Notes
    const editNote = async (id, title, description) => {
        try {
            const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': localStorage.getItem('token')
                },
                body: JSON.stringify({ title, description })
            });
            // eslint-disable-next-line
            const json = await response.json();
            
            // Update state immutably
            setNotes(prevNotes =>
                prevNotes.map(note =>
                    note._id === id ? { ...note, title, description } : note
                )
            );
        } catch (error) {
            console.error("Error updating note:", error);
        }
    }

    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;