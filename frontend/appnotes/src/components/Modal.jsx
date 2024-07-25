import { useState } from "react"

const Modal = ( { titulo, setTitulo, assunto, setAssunto, createNote } ) => {

   
    
    return (
        <div className="modal">
        <div className='form-user'>

          <form>
              <label htmlFor="titulo">Título:</label>
              <input type="text" placeholder='Digite um nome' id='titulo' value={titulo} onChange={(e) => setTitulo(e.target.value)}/>
              <label htmlFor="assunto">Assunto:</label>
              <textarea placeholder='Descreva o assunto' id='assunto' value={assunto} onChange={(e) => setAssunto(e.target.value)}/>
          </form>
          
          <button onClick={createNote}>Enviar</button>
        </div>
      </div>
    )
}

export default Modal

