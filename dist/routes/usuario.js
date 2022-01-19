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
const router = (0, express_1.Router)();
router.get('/', usuario_1.getUsuarios);
router.get('/:id', [
    (0, express_validator_1.check)('id', 'el id es obligatorio'),
    validar_jwt_1.default,
    validar_campos_1.default
], usuario_1.getUsuario);
router.post('/', [
    (0, express_validator_1.check)('email', 'el email es obligatorio').isEmail(),
    validar_campos_1.default
], usuario_1.postUsuario);
router.put('/:id', usuario_1.putUsuario);
router.delete('/:id', usuario_1.deleteUsuario);
exports.default = router;
//# sourceMappingURL=usuario.js.map