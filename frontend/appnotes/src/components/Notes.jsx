const Notes = ({notes ,deleteNotes, modalNote} ) => {

    return (
        <div className="Notes">
            {notes.map((note) => 
                <div className="individualNote" key={note.id}>
                    <p className="title">{note.titulo}</p>
                    <p className="content">{note.assunto}</p>
                    <div className="actions">
                        <button onClick={() => modalNote(note.id)}>Editar</button>
                        <button onClick={() => deleteNotes(note.id)}>Apagar</button>
                    </div>
                </div>
    
            )}
        </div>
        
    )
}

export default Notes