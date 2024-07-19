import Connection from "../../database/db.js";

const db = new Connection();

const authUser = (req, res) => {
    const {email, senha} = req.body;
    const sql = 'SELECT * FROM user WHERE email = ? AND senha = ?'

    db.query(sql, [email, senha], (err, data) => {
        if(err) return res.status(500);

        if (data.length === 0) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }

        res.status(200).json({message: 'Usuário autenticado com sucesso'})
    })

    
}

export default {authUser}