import { useState } from "react"

const Header = ( {titulo, setTitulo, handleSubmit}) => {

    
    
    return(
    
        <header className="header">

            <form onSubmit={handleSubmit}>
                <div className="searchContainer">
                    <img src="https://img.icons8.com/?size=50&id=59878&format=png&color=ffffff" alt="" />
                    <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} placeholder="pesquisar" />
                </div>
            </form>

        </header>

    )
}

export default Header