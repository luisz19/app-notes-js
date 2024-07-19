import { Link } from "react-router-dom";

const LoginForm = () => {
    return (
        <div className="LoginForm">
            <form>
                <label htmlFor="email">Email:</label>
                <input type="email" placeholder="Email" id="email"  required />
                <label htmlFor="senha">Senha:</label>
                <input type="password" placeholder="Senha" id="senha"   required />

                <div>
                    <p>Não tem uma conta ainda?</p><Link to="/registro">Registre-se</Link>
                </div>
            </form>
        </div>
    )
}

export default LoginForm;
