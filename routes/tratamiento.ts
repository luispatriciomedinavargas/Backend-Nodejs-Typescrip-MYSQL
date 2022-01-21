import Router from 'express';
import { check } from 'express-validator';
import { deleteTratamiento, getAllTratamiento, getByIdTratamiento, postTratamiento, putTratamiento } from '../controllers/tratamiento';
import { validarIdTratamiento } from '../helper/db-validators';
import validarCampos from '../middlewares/validar-campos';
import validarJWT from '../middlewares/validar-jwt';


const router=Router();

router.get('/',[
    validarJWT,
    validarCampos
],getAllTratamiento);
router.get('/:id',[
    validarJWT,
    check('id','el id es entero').isInt(),
    check('id','el ID es obligatorio').notEmpty(),
    check('id').custom(validarIdTratamiento),
    validarCampos
],getByIdTratamiento);
router.post('/',[
    validarJWT,
    check('descripcion','La descripcion es obligatoria').notEmpty(),
    check('descripcion','La descripcion es un string').isString(),
    validarCampos
],postTratamiento);
router.put('/:id',[
    validarJWT,
    check('id','el id es entero').isInt(),
    check('id','el ID es obligatorio').notEmpty(),
    check('id').custom(validarIdTratamiento),
    validarCampos
],putTratamiento);
router.delete('/:id',[
    validarJWT,
    check('id','el id es entero').isInt(),
    check('id','el ID es obligatorio').notEmpty(),
    check('id').custom(validarIdTratamiento),
    validarCampos],deleteTratamiento);


export default router


