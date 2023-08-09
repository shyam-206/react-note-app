import { useState } from "react";
import NotesList from "./components/NotesList";
import {nanoid} from "nanoid"
import Search from "./components/Search";
import Header from "./components/Header";

function App() {

  //some notes of example
  const [notes,setNotes] = useState([
    {
      id : nanoid(),
      text : "This is my first note!",
      date : "15/04/2023",
    },
    {
      id : nanoid(),
    text : "This is my second note!",
    date : "21/04/2023",
    },
    {
      id : nanoid(),
    text : "This is my third note!",
    date : "25/04/2023",
    }
  ])

  //for the search note filtering by the text
  const [searchText,setSearchText] = useState('')

  //for the dark mode
  const [darkMode,setDarkMode] = useState(false)

  //adding a new note
  const addNote  = (text) => {
    const date = new Date()
    const newNote = {
      id : nanoid(),
      text : text,
      date : date.toLocaleDateString()
    }

    const newNotes = [...notes, newNote]
    setNotes(newNotes)

  }

  //delete the note
  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id)
    setNotes(newNotes)
  }

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote =  {setSearchText} />
        <NotesList
            notes={notes.filter((note) =>
              note.text.toLowerCase().includes(searchText)
            )}
            handleAddNote={addNote}
            handleDeleteNote={deleteNote}
          />
      </div>
    </div>
  );
}

export default App;
