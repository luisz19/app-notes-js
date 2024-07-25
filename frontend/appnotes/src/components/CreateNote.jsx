const createNote = ({Clicked}) => {
    return(
        <div className="container-create-note">
                <h1 className="notesTitle">Notes</h1>
                <button onClick={Clicked}>+ Criar Nota</button>
            </div>
    )
}

export default createNote;