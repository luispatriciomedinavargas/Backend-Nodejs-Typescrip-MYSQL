"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const usuario_1 = require("../controllers/usuario");
const validar_campos_1 = __importDefault(require("../middlewares/validar-campos"));
const validar_jwt_1 = __importDefault(require("../middlewares/validar-jwt"));
const db_validators_1 = require("../helper/db-validators");
const router = (0, express_1.Router)();
/*
     * se valida JWT, campos relacioados a la entidad
     * que sea el dato correcto/not null/empity y ID

*/
router.get('/', [
    validar_jwt_1.default,
    validar_campos_1.default
], usuario_1.getUsuarios);
router.get('/:id', [
    (0, express_validator_1.check)('id', 'el id es obligatorio').notEmpty(),
    (0, express_validator_1.check)('id').custom(db_validators_1.validarIdUsuario),
    validar_jwt_1.default,
    validar_campos_1.default
], usuario_1.getUsuarioById);
router.post('/', [
    (0, express_validator_1.check)('email', 'el email es obligatorio').isEmail(),
    (0, express_validator_1.check)('password', 'el password es obligatorio').notEmpty(),
    (0, express_validator_1.check)('id_persona', 'el la persona es obligatoria es obligatorio').notEmpty(),
    (0, express_validator_1.check)('id_persona').custom(db_validators_1.validarIdPersonaUsuario),
    validar_jwt_1.default,
    validar_campos_1.default
], usuario_1.postUsuario);
router.put('/:id', [
    (0, express_validator_1.check)('id', 'el id es obligatorio').notEmpty(),
    (0, express_validator_1.check)('id', 'el id es obligatorio').isNumeric(),
    (0, express_validator_1.check)('email', 'el email es obligatorio').isEmail(),
    (0, express_validator_1.check)('password', 'la password es obligatorio').notEmpty(),
    validar_jwt_1.default,
    validar_campos_1.default
], usuario_1.putUsuario);
router.delete('/:id', [
    (0, express_validator_1.check)('id', 'el id es obligatorio').notEmpty(),
    (0, express_validator_1.check)('id', 'el id es obligatorio').isNumeric(),
    (0, express_validator_1.check)('id').custom(db_validators_1.validarIdUsuario),
    validar_jwt_1.default,
    validar_campos_1.default
], usuario_1.deleteUsuario);
exports.default = router;
//# sourceMappingURL=usuario.js.map