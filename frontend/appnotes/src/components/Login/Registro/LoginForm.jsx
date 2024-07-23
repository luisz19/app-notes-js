import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom'


const LoginForm = () => {
    const url = 'http://localhost:8080'
    const [userId, setUserId] = useState('');
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [token, setToken] = useState('');
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const postLogin = async (e) => {
        e.preventDefault()

        await axios.post(`${url}/auth/login`, {

            email: email,
            senha: senha
        })

        .then((res) => {

            console.log(res.data)
            setToken(res.data.token)
            setUserId(res.data.userId)
            localStorage.setItem('UserId', userId)
            localStorage.setItem('Token', token)
            
      
                
        })

        .catch((err) => {
            console.error(err)
            
        })
    }




    return (
        <div className="LoginForm">
               <h1>Login</h1>
            <form>
                <label htmlFor="email">Email:</label>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} id="email"  required />
                <label htmlFor="senha">Senha:</label>
                <input type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} id="senha"   required />

                <button onClick={postLogin}>Entrar</button>

                <p>{error}</p>

                <div>
                    <p>Não tem uma conta ainda?</p><Link to="/registro">Registre-se</Link>
                </div>
            </form>
        </div>
    )
}

export default LoginForm;
