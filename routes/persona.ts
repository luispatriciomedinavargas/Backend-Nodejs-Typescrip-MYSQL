import {Router} from 'express';
import { check } from 'express-validator';
import { DeletePersona, getAllPersona, getByIdPersona, postPersona, PutPersona } from '../controllers/persona';
import { validarIdPersona } from '../helper/db-validators';

import validarCampos from "../middlewares/validar-campos";
import validarJWT from "../middlewares/validar-jwt";

const router=Router();


 router.get('/',[
    validarJWT,
    validarCampos
],getAllPersona)
 router.get('/:id',[
    validarJWT,
    check('id','el id es entero').isInt(),
    check('id','el ID es obligatorio').notEmpty(),
    check('id').custom(validarIdPersona),
    validarJWT,
    validarCampos
   ],getByIdPersona)


 router.post('/',[
    check('nombre','El nombre es obligatorio').notEmpty(),
    check('apellido','El apellido es obligatorio').notEmpty(),
    check('nombre','El nombre un string').isString(),
    check('apellido','El apellido un string').isString(),
    validarJWT,
    validarCampos
],postPersona)


 router.put('/:id',[
    validarJWT,
    check('nombre','El nombre es obligatorio').notEmpty(),
    check('apellido','El apellido es obligatorio').notEmpty(),
    check('nombre','El nombre un string').isString(),
    check('apellido','El apellido un string').isString(),
    check('id','el id es entero').isInt(),
    check('id','el ID es obligatorio').notEmpty(),
    check('id').custom(validarIdPersona),
    validarCampos
],PutPersona)



 router.delete('/:id',[
    validarJWT,
    check('id','el id es entero').isInt(),
    check('id','el ID es obligatorio').notEmpty(),
    check('id').custom(validarIdPersona),
    validarCampos
],DeletePersona)

export default router;