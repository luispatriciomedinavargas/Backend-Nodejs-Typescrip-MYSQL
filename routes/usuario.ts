import {Router} from 'express';
import { check } from 'express-validator';
import { deleteUsuario, getUsuarioById, getUsuarios, postUsuario, putUsuario } from '../controllers/usuario';
import validarCampos from '../middlewares/validar-campos';
import validarJWT from '../middlewares/validar-jwt';

import { validarIdPersonaUsuario,validarIdUsuario } from '../helper/db-validators';

const router=Router();
/*
     * se valida JWT, campos relacioados a la entidad 
     * que sea el dato correcto/not null/empity y ID

*/

router.get('/', [
    validarJWT,
    validarCampos
],  getUsuarios);


router.get('/:id',
[
    check('id','el id es obligatorio').notEmpty(),
    check('id').custom(validarIdUsuario),
    validarJWT,
    validarCampos
],  getUsuarioById);




router.post('/',
[
    check('email','el email es obligatorio').isEmail(),
    check('password','el password es obligatorio').notEmpty(),
    check('id_persona','el la persona es obligatoria es obligatorio').notEmpty(),
    check('id_persona').custom(validarIdPersonaUsuario),
    validarJWT,
    validarCampos
],
    postUsuario);

router.put('/:id', [
   check('id','el id es obligatorio').notEmpty(),
   check('id','el id es obligatorio').isNumeric(),
   check('email','el email es obligatorio').isEmail(),
   check('password','la password es obligatorio').notEmpty(),
   validarJWT,
   validarCampos
], putUsuario);
router.delete('/:id',[
   check('id','el id es obligatorio').notEmpty(),
   check('id','el id es obligatorio').isNumeric(),
   check('id').custom(validarIdUsuario),
   validarJWT,
   validarCampos
], deleteUsuario);


export default router;