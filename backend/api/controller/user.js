import Connection from '../../database/db.js'

const db = new Connection();

const getUsers = (req, res) => {
    const sql = 'SELECT * FROM user';

    db.query(sql, (err, data) => {
        if (err) return res.status(500).json(err);
        
        return res.status(200).json(data);
    });
};

const getUserById = (req, res) => {
    const { id } = req.params;
    const sql = 'SELECT * FROM user WHERE id = ?';

    db.query(sql, [id], (err, data) => {
        if (err) return res.status(500).json(err);

        if (data.length === 0) {
            return res.status(404).json({ message: 'User not found' });
        }

        return res.status(200).json(data);
    });
};

const createUser = (req, res) => {
    const { nome, email, senha } = req.body;
    const sql = 'INSERT INTO user (nome, email, senha) VALUES (?, ?, ?)';

    db.query(sql, [nome, email, senha], (err, result) => {
        if (err) {
            console.error('Error creating user:', err);
            return res.status(500).json(err);
        }

        return res.status(201).json({
            id: result.insertId,
            nome,
            email,
            senha
        });
    });
};

const updateUser = (req, res) => {
    const { id } = req.params;
    const { nome, email, senha } = req.body;
    const sql = "UPDATE user SET nome = ?, email = ?, senha = ? WHERE id = ?";

    db.query(sql, [nome, email, senha, id], (err, results) => {
        if (err) {
            console.error('Error updating user:', err);
            return res.status(500).json(err);
        }

        return res.status(201).json({
            id,
            nome,
            email,
            senha 
        });
    });
};

const deleteUser = (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM user WHERE id = ?'

    db.query(sql, [id], (err, results) => {
        if (err) {
            console.error('Error deleting user:', err);
            return res.status(500).json(err);
        }

        return res.status(200).json({message: 'usuário deletado com sucesso'});

    })
}

export default { getUsers, createUser, getUserById, updateUser, deleteUser };

//mudar as alterações do gpt e terminar del
//ver o erro