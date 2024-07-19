import Connection from '../../database/db.js'

const db = new Connection();

const userNotes = (req, res) => {
    const {id} = req.params;
    const sql = 'SELECT notes.titulo, notes.assunto, notes.user_id FROM user JOIN notes ON user.id = notes.user_id WHERE user.id = ?';
    
    db.query(sql, [id], (err, data) => {
        if(err) return res.status(500).json(err);

        return res.status(200).json(data)
    })
}

export default {userNotes};