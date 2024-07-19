import Connection from "../../database/db.js";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken';

const SECRET_KEY ='kCK5#B"-6Dg*%,8xRZw[4jPd&^.VeW/_';

const db = new Connection();

const authUser = (req, res) => {
    const {email, senha} = req.body;
    const sql = 'SELECT * FROM user WHERE email = ?'

    db.query(sql, [email], (err, data) => {
        if(err) return res.status(500);

        if (data.length === 0) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }

        const user = data[0];
        const passwordIsValid = bcrypt.compareSync(senha, user.senha);

        if(!passwordIsValid) {
            return res.status(401).json({message: 'Email ou senha inválidos'})
        }

        const token = jwt.sign({ id: user.id }, SECRET_KEY, {expiresIn: 86400})
        res.status(200).json({auth: true, token, userId: user.id})
    })

    
}

export default {authUser}