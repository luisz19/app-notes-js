const Notes = ({notes ,deleteNotes} ) => {

    return (
        <div className="Notes">
            {notes.map((note) => 
                <div className="individualNote" key={note.id}>
                    <p className="title">{note.titulo}</p>
                    <p className="content">{note.assunto}</p>
                    <div className="actions">
                        <button>editar</button>
                        <button onClick={() => deleteNotes(note.id)}>apagar</button>
                    </div>
                </div>
    
            )}
        </div>
        
    )
}

export default Notes