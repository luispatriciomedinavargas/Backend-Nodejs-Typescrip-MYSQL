"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const usuarios_1 = __importDefault(require("../models/usuarios"));
const persona_1 = __importDefault(require("../models/persona"));
const generar_jwt_1 = __importDefault(require("../helper/generar-jwt"));
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { password, email } = req.body;
    let id;
    const usuario = yield usuarios_1.default.findOne({
        where: {
            password: password,
            email: email,
            estado: true
        },
        include: [{
                model: persona_1.default,
                as: 'id_persona'
            }]
    });
    if (!usuario) {
        return res.json({ msg: 'la contraseña o el usuario no es valido' });
    }
    id = Object(usuario)["id"];
    const token = yield (0, generar_jwt_1.default)(id);
    res.json({
        usuario,
        token
    });
});
exports.login = login;
//# sourceMappingURL=auth.js.map