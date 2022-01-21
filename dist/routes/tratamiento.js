"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_validator_1 = require("express-validator");
const tratamiento_1 = require("../controllers/tratamiento");
const db_validators_1 = require("../helper/db-validators");
const validar_campos_1 = __importDefault(require("../middlewares/validar-campos"));
const validar_jwt_1 = __importDefault(require("../middlewares/validar-jwt"));
const router = (0, express_1.default)();
router.get('/', [
    validar_jwt_1.default,
    validar_campos_1.default
], tratamiento_1.getAllTratamiento);
router.get('/:id', [
    validar_jwt_1.default,
    (0, express_validator_1.check)('id', 'el id es entero').isInt(),
    (0, express_validator_1.check)('id', 'el ID es obligatorio').notEmpty(),
    (0, express_validator_1.check)('id').custom(db_validators_1.validarIdTratamiento),
    validar_campos_1.default
], tratamiento_1.getByIdTratamiento);
router.post('/', [
    validar_jwt_1.default,
    (0, express_validator_1.check)('descripcion', 'La descripcion es obligatoria').notEmpty(),
    (0, express_validator_1.check)('descripcion', 'La descripcion es un string').isString(),
    validar_campos_1.default
], tratamiento_1.postTratamiento);
router.put('/:id', [
    validar_jwt_1.default,
    (0, express_validator_1.check)('id', 'el id es entero').isInt(),
    (0, express_validator_1.check)('id', 'el ID es obligatorio').notEmpty(),
    (0, express_validator_1.check)('id').custom(db_validators_1.validarIdTratamiento),
    validar_campos_1.default
], tratamiento_1.putTratamiento);
router.delete('/:id', [
    validar_jwt_1.default,
    (0, express_validator_1.check)('id', 'el id es entero').isInt(),
    (0, express_validator_1.check)('id', 'el ID es obligatorio').notEmpty(),
    (0, express_validator_1.check)('id').custom(db_validators_1.validarIdTratamiento),
    validar_campos_1.default
], tratamiento_1.deleteTratamiento);
exports.default = router;
//# sourceMappingURL=tratamiento.js.map