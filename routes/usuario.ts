import {Router} from 'express';
import { check } from 'express-validator';
import { deleteUsuario, getUsuario, getUsuarios, postUsuario, putUsuario } from '../controllers/usuario';
import validarCampos from '../middlewares/validar-campos';
import validarJWT from '../middlewares/validar-jwt';



const router=Router();


router.get('/',     getUsuarios);
router.get('/:id',
[
check('id','el id es obligatorio'),
validarJWT,
validarCampos
],     getUsuario);

router.post('/',   [
    check('email','el email es obligatorio').isEmail(),
    validarCampos
],
  postUsuario);
router.put('/:id',    putUsuario);
router.delete('/:id', deleteUsuario);


export default router;