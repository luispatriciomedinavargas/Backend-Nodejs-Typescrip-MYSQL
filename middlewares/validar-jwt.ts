import {response,request} from 'express';;
import jwt from 'jsonwebtoken';
import { NUMBER } from 'sequelize/dist';
import Usuario from '../models/usuarios';


 const validarJWT = async (req = request, res = response, next:any) => {
    const token = req.header('x-token');
    const secretkey = process.env.SECRETORPRIVATEKEY || 'Pablit0C14VoUnClavo';

    if (!token) {
        return res.status(401).json({
            msg: 'does not exist token in the request.'
        });
    }

    try {

        const gettingID  =   jwt.verify(token, secretkey);
    
   const id= Object.values(gettingID).length -2;
        const userAuth = await Usuario.findByPk(id);
        const estado=Object.values(userAuth!);
        if (!estado[0].estado) {
            return res.status(401).json(
                {
                    msg: 'ese usuario esta borrado'
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
export default validarJWT