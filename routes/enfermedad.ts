import {Router} from 'express';
import { check } from 'express-validator';

import {
    getAllEnfermedad,
    GetByIdEnfermedad,
    postEnfermedad,
    putEnfermedad,
    deleteEnfermedad,
} from '../controllers/enfermedad';
import { validarIdEnfermedad, validarIdTratamiento } from '../helper/db-validators';
import validarCampos from '../middlewares/validar-campos';
import validarJWT from '../middlewares/validar-jwt';
;



const router=Router();



router.get('/',[
    validarJWT,
    validarCampos
],getAllEnfermedad)
router.get('/:id',[
    validarJWT,
    check('id','el id es entero').isInt(),
    check('id','el ID es obligatorio').notEmpty(),
    check('id').custom(validarIdEnfermedad),
    validarCampos
],GetByIdEnfermedad)
router.post('/',[
    validarJWT,
    check('descripcion','Descripcion es un string').isString,
    validarCampos
],postEnfermedad)
router.put('/:id',[
    validarJWT,
    check('id','el id es entero').isInt(),
    check('id','el ID es obligatorio').notEmpty(),
    check('id').custom(validarIdEnfermedad),
    check('descripcion','Descripcion es un string').isString,
    validarCampos
],putEnfermedad)
router.delete('/:id',[
    validarJWT,
    check('id','el id es entero').isInt(),
    check('id','el ID es obligatorio').notEmpty(),
    check('id').custom(validarIdEnfermedad),
    validarCampos
],deleteEnfermedad)

export default router;