import mysql from 'mysql';

class Connection {
    static #instance = null;

    constructor() {
        if (Connection.#instance) {
            return Connection.#instance;
        }

        this.connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'appnotes',
            connectTimeout: 10000 // 10 seconds timeout
        });

        this.connection.connect((err) => {
            if (err) {
                console.error('Não foi possível se conectar com o banco de dados:', err);
                throw err;
            }

            console.log('Conexão bem sucedida');
        });

        Connection.#instance = this;
    }

    query(sql, args, callback) {
        this.connection.query(sql, args, callback);
    }
}

  
export default Connection