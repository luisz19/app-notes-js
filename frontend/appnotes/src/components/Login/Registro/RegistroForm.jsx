import { Link } from "react-router-dom";

const RegistroForm = () => {
    return (
        <div className="LoginForm">
            <form>
                <label htmlFor="nome">Nome:</label>
                <input type="text" placeholder="Digite seu nome" id="nome"  required />
                <label htmlFor="email">Email:</label>
                <input type="email" placeholder="Digite seu email" id="email"  required />
                <label htmlFor="senha">Senha:</label>
                <input type="password" placeholder="Digite sua senha" id="senha"   required />
                
                <div>
                    <p>Já tem uma conta?</p><Link to="/">Login</Link>
                </div>
            </form>
        </div>
    )
}

export default RegistroForm;