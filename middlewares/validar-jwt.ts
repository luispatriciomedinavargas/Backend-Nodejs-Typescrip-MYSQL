import {response,request} from 'express';;
import jwt from 'jsonwebtoken';

const Usuario = require('../models/usuario');

const validarJWT = async (req = request, res = response, next:any) => {


    const token = req.header('x-token');
    const secretkey = process.env.SECRETORPRIVATEKEY || 'Pablit0C14VoUnClavo';

    if (!token) {
        return res.status(401).json({
            msg: 'does not exist token in the request.'
        });
    }

    try {

        const  id  = jwt.verify(token, secretkey);

        console.log(id);
        const userAuth = await Usuario.findById(id);

        //Verificar si el uid tiene estado true
        if (!userAuth.estado) {
            return res.status(401).json(
                {
                    msg: 'that is User is deleted, please check it - estado is not Valid'
                }
            )
        }

        req.usuario = userAuth;

        next();
    } catch (error) {

        console.log(error);
        res.status(401).json({
            msg: 'invalid token.'
        })
    }


}
module.exports = { validarJWT }