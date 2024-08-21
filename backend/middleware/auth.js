import jwt from 'jsonwebtoken';
import fs from 'fs';

const auth = (req, res, next) => {
    const cabecalho = req.headers["authorization"]
    if (!cabecalho) {
        return res.status(401).json({ message: 'Cabeçalho não identificado' });
    }

    const token = cabecalho.split(' ')[1];

    if(!token){
        return res.status(401).json({
            mensagem: "Token não reconhecido / mal formatado"
        })
    }
    const publicKey = fs.readFileSync('./keys/public.key', 'utf8');

    jwt.verify(token, publicKey, {algorithm:["RS256"]}, (erro, decodificado) => {
        if(erro){
            console.log(erro);
            return res.status(401).json({ mensagem: "Token inválido" })
        }

        console.log("token decodificado")
        req.nome = decodificado.usuario;
        return next();
    })
};

export default auth;
