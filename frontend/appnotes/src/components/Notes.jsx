const Notes = ({notes}) => {

    return (
        <div className="Notes">
            {notes.map((note, index) => 
                <div className="individualNote" key={note.id ? note.id : index}>
                    <p className="title">{note.titulo}</p>
                    <p className="content">{note.assunto}</p>
                    <div className="actions">
                        <button>actions</button>
                        <button>actions</button>
                    </div>
                </div>
    
            )}
        </div>
        
    )
}

export default Notes