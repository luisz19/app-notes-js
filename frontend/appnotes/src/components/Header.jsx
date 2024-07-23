import { useState } from "react"

const Header = ( {titulo, setTitulo, handleSubmit}) => {

    
    
    return(
    
        <header className="header">

            <button>menu</button>
            <form onSubmit={handleSubmit}>
                <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} placeholder="pesquisar" />
            </form>

        </header>

    )
}

export default Header