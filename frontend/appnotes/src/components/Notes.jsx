const Notes = ({notes}) => {

    return (
        <div>
            {notes.map((note, index) => 
                <div key={note.id ? note.id : index}>
                    <p>{note.titulo}</p>
                    <p>{note.assunto}</p>
                    <p>{note.user_id}</p>
                </div>
    
            )}
        </div>
        
    )
}

export default Notes