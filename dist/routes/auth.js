"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const auth_1 = require("../controllers/auth");
const validar_campos_1 = __importDefault(require("../middlewares/validar-campos"));
const router = (0, express_1.Router)();
router.post('/', [
    (0, express_validator_1.check)('password', 'la contraseña no puede ser vacia').notEmpty(),
    (0, express_validator_1.check)('email', 'el email no puede ser vacia').notEmpty(),
    (0, express_validator_1.check)('email', 'el email no tiene un formato valido').isEmail(),
    validar_campos_1.default
], auth_1.login);
exports.default = router;
//# sourceMappingURL=auth.js.map