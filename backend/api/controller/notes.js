import Connection from '../../database/db.js'

const db = new Connection();

const getNotes = (req, res) => {
    const sql = 'SELECT * FROM notes';

    db.query(sql, (err, data) => {
        if(err) return res.status(500).json(err);

        return res.status(200).json(data);
    })
}

const getNotesById = (req, res) => {
    const { id } = req.params;
    const sql = 'SELECT * FROM notes WHERE id = ?';

    db.query(sql, [id], (err, data) => {
        if(err) return res.status(500).json(err);

        return res.status(200).json(data);
    })
}

const createNote = (req, res) => {
    const {user_id, titulo, assunto} = req.body;
    const sql = 'INSERT INTO notes (user_id, titulo, assunto) VALUES (?, ?, ?)';

    db.query(sql, [user_id, titulo, assunto], (err, data) => {
        if(err) return res.status(500).json(err);

        return res.status(201).json({  
            id: data.insertId,
            titulo,
            assunto,
            user_id
        })
    })
}

const updateNote = (req, res) => {
    const { id } = req.params;
    const { user_id, titulo, assunto } = req.body;
    const sql = "UPDATE notes SET user_id = ?, titulo = ?, assunto = ? WHERE id = ?";

    db.query(sql, [user_id, titulo, assunto, id], (err, results) => {
        if (err) {
            console.error('Error updating note:', err);
            return res.status(500).json(err);
        }

        return res.status(201).json({
            id,
            titulo,
            assunto,
            user_id
        });
    });
};

const deleteUser = (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM notes WHERE id = ?'

    db.query(sql, [id], (err, results) => {
        if (err) {
            console.error('Error deleting user:', err);
            return res.status(500).json(err);
        }

        return res.status(200).json({message: 'nota deletada com sucesso'});

    })
}

export default { getNotes, getNotesById, createNote, updateNote, deleteUser }