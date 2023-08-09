import React, { useState } from 'react'

function AddNote({handleAddNote}) {
    const [noteText,setNoteText]  = useState('')
    const characterLimit = 250

    const handleChange = (e) => {
        if(characterLimit - e.target.value.length >= 0){
            setNoteText(e.target.value)
        }
    }

    const handleSaveClick = () => {
        if(noteText.trim().length > 0){
            handleAddNote(noteText)
            setNoteText('')
        }
        
    }

    return (
        <div  className='note new'>
            <textarea 
                cols="10" 
                rows="8"
                placeholder='Type to add Note...'
                value={noteText}
                onChange={handleChange}
            ></textarea>
            <div className="note-footer">
                <small>{characterLimit - noteText.length} Remaining</small>
                <button className='save' onClick={handleSaveClick}>Save</button>
            </div>
        </div>
    )
}

export default AddNote