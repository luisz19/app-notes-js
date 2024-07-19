import jwt from 'jsonwebtoken'

const SECRET_KEY ='kCK5#B"-6Dg*%,8xRZw[4jPd&^.VeW/_';

const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];

    if(!token) return res.status(403).send('É necessário o Token');

    const tokenParts = token.split(' ');
    if (tokenParts.length !== 2 || tokenParts[0] !== 'Bearer') { //Garante que o cabeçalho contém exatamente duas partes. Se tiver menos ou mais partes, o formato está incorreto. Garante que a primeira parte do cabeçalho seja "Bearer". 
        return res.status(401).json({ message: 'Formato do Token inválido' });
    }

    const actualToken = tokenParts[1];

    jwt.verify(actualToken, SECRET_KEY, (err, decoded) => {
        if(err) return res.status(500).send(err);

        req.userId = decoded.id;
        next()
    })
}

export default verifyToken