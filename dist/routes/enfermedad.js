"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const enfermedad_1 = require("../controllers/enfermedad");
const db_validators_1 = require("../helper/db-validators");
const validar_campos_1 = __importDefault(require("../middlewares/validar-campos"));
const validar_jwt_1 = __importDefault(require("../middlewares/validar-jwt"));
;
const router = (0, express_1.Router)();
router.get('/', [
    validar_jwt_1.default,
    validar_campos_1.default
], enfermedad_1.getAllEnfermedad);
router.get('/:id', [
    validar_jwt_1.default,
    (0, express_validator_1.check)('id', 'el id es entero').isInt(),
    (0, express_validator_1.check)('id', 'el ID es obligatorio').notEmpty(),
    (0, express_validator_1.check)('id').custom(db_validators_1.validarIdEnfermedad),
    validar_campos_1.default
], enfermedad_1.GetByIdEnfermedad);
router.post('/', [
    validar_jwt_1.default,
    (0, express_validator_1.check)('descripcion', 'Descripcion es un string').isString,
    validar_campos_1.default
], enfermedad_1.postEnfermedad);
router.put('/:id', [
    validar_jwt_1.default,
    (0, express_validator_1.check)('id', 'el id es entero').isInt(),
    (0, express_validator_1.check)('id', 'el ID es obligatorio').notEmpty(),
    (0, express_validator_1.check)('id').custom(db_validators_1.validarIdEnfermedad),
    (0, express_validator_1.check)('descripcion', 'Descripcion es un string').isString,
    validar_campos_1.default
], enfermedad_1.putEnfermedad);
router.delete('/:id', [
    validar_jwt_1.default,
    (0, express_validator_1.check)('id', 'el id es entero').isInt(),
    (0, express_validator_1.check)('id', 'el ID es obligatorio').notEmpty(),
    (0, express_validator_1.check)('id').custom(db_validators_1.validarIdEnfermedad),
    validar_campos_1.default
], enfermedad_1.deleteEnfermedad);
exports.default = router;
//# sourceMappingURL=enfermedad.js.map