import Connection from "../../database/db.js";

const db = new Connection();

const search = (req, res) => {
    const { id } = req.params;
    const { q } = req.query;
    

    const sql = 'SELECT * FROM notes WHERE user_id = ? AND titulo LIKE ?';

    db.query(sql, [ id, `%${q}%`], (err, data) => {
        if (err) {
            console.error('Error executing query:', err); // Debug log
            return res.status(500).send(err);
        }

        res.status(200).send(data);
    })
}

export default {search}