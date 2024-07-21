import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const RegistroForm = () => {

    const url = 'http://localhost:8080'

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [error, setError] = useState('');

    const postRegister = async (e) => {
        e.preventDefault()

        await axios.post(`${url}/register`, {
            nome: nome,
            email: email,
            senha: senha
        })

        .then((res) => {
            console.log(res)
            
        })

        .catch((err) => {
            console.error(err)
        })
    }

    return (
        <div className="LoginForm">
                 <h1>Registro</h1>
                
            <form>
                <label htmlFor="nome">Nome:</label>
                <input type="text" placeholder="Digite seu nome" value={nome} onChange={(e) => setNome(e.target.value)} id="nome"  required />
                <label htmlFor="email">Email:</label>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} id="email"  required />
                <label htmlFor="senha">Senha:</label>
                <input type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} id="senha"   required />
                
                <button onClick={postRegister}>Entrar</button>

                <div>
                    <p>Já tem uma conta?</p><Link to="/">Login</Link>
                </div>
            </form>
        </div>
    )
}

export default RegistroForm;