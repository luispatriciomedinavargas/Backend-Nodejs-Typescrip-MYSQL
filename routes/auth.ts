import {Router} from 'express';
import { check } from 'express-validator';
import { login } from '../controllers/auth';
import validarCampos from '../middlewares/validar-campos';

const router=Router();


router.post('/',[
    check('password','la contraseña no puede ser vacia').notEmpty(),
    check('email','el email no puede ser vacia').notEmpty(),
    check('email','el email no tiene un formato valido').isEmail(),
    validarCampos
],login)


export default router;