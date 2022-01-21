"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const persona_1 = require("../controllers/persona");
const db_validators_1 = require("../helper/db-validators");
const validar_campos_1 = __importDefault(require("../middlewares/validar-campos"));
const validar_jwt_1 = __importDefault(require("../middlewares/validar-jwt"));
const router = (0, express_1.Router)();
router.get('/', [
    validar_jwt_1.default,
    validar_campos_1.default
], persona_1.getAllPersona);
router.get('/:id', [
    validar_jwt_1.default,
    (0, express_validator_1.check)('id', 'el id es entero').isInt(),
    (0, express_validator_1.check)('id', 'el ID es obligatorio').notEmpty(),
    (0, express_validator_1.check)('id').custom(db_validators_1.validarIdPersona),
    validar_jwt_1.default,
    validar_campos_1.default
], persona_1.getByIdPersona);
router.post('/', [
    (0, express_validator_1.check)('nombre', 'El nombre es obligatorio').notEmpty(),
    (0, express_validator_1.check)('apellido', 'El apellido es obligatorio').notEmpty(),
    (0, express_validator_1.check)('nombre', 'El nombre un string').isString(),
    (0, express_validator_1.check)('apellido', 'El apellido un string').isString(),
    validar_jwt_1.default,
    validar_campos_1.default
], persona_1.postPersona);
router.put('/:id', [
    validar_jwt_1.default,
    (0, express_validator_1.check)('nombre', 'El nombre es obligatorio').notEmpty(),
    (0, express_validator_1.check)('apellido', 'El apellido es obligatorio').notEmpty(),
    (0, express_validator_1.check)('nombre', 'El nombre un string').isString(),
    (0, express_validator_1.check)('apellido', 'El apellido un string').isString(),
    (0, express_validator_1.check)('id', 'el id es entero').isInt(),
    (0, express_validator_1.check)('id', 'el ID es obligatorio').notEmpty(),
    (0, express_validator_1.check)('id').custom(db_validators_1.validarIdPersona),
    validar_campos_1.default
], persona_1.PutPersona);
router.delete('/:id', [
    validar_jwt_1.default,
    (0, express_validator_1.check)('id', 'el id es entero').isInt(),
    (0, express_validator_1.check)('id', 'el ID es obligatorio').notEmpty(),
    (0, express_validator_1.check)('id').custom(db_validators_1.validarIdPersona),
    validar_campos_1.default
], persona_1.DeletePersona);
exports.default = router;
//# sourceMappingURL=persona.js.map