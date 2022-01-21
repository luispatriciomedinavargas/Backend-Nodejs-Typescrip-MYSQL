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
exports.deleteUsuario = exports.putUsuario = exports.postUsuario = exports.getUsuarioById = exports.getUsuarios = void 0;
const models_1 = require("../models");
const usuarios_1 = __importDefault(require("../models/usuarios"));
const getUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const getAll = yield usuarios_1.default.findAll({
        include: [{
                model: models_1.Persona,
                as: 'id_persona'
            }]
    });
    res.json({
        getAll
    });
});
exports.getUsuarios = getUsuarios;
const getUsuarioById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const findByID = yield usuarios_1.default.findByPk(id, {
        include: [{
                model: models_1.Persona,
                as: 'id_persona'
            }]
    });
    res.json({
        findByID
    });
});
exports.getUsuarioById = getUsuarioById;
const postUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { password, email } = req.body;
    const usuario = yield usuarios_1.default.create(password, email);
    res.status(200).json({
        usuario
    });
});
exports.postUsuario = postUsuario;
const putUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { password, estado, email } = req.body;
    const data = { email, password };
    const usuario = yield usuarios_1.default.findByPk(id);
    yield usuario.update(data);
    usuario.save();
    res.json({
        usuario
    });
});
exports.putUsuario = putUsuario;
const deleteUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const usuario = yield usuarios_1.default.findByPk(id);
    yield (usuario === null || usuario === void 0 ? void 0 : usuario.update({ estado: false }));
    res.json({
        msg: 'el usuario fue borrado correctamente'
    });
});
exports.deleteUsuario = deleteUsuario;
//# sourceMappingURL=usuario.js.map