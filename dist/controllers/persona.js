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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeletePersona = exports.PutPersona = exports.postPersona = exports.getByIdPersona = exports.getAllPersona = void 0;
const models_1 = require("../models");
const getAllPersona = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const allPersona = yield models_1.Persona.findAll({ where: { estado: 1 } });
    res.status(200).json({
        allPersona
    });
});
exports.getAllPersona = getAllPersona;
const getByIdPersona = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const byIdPersona = yield models_1.Persona.findByPk(id);
    res.json({
        byIdPersona
    });
});
exports.getByIdPersona = getByIdPersona;
const postPersona = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre, apellido } = req.body;
    console.log(nombre, apellido);
    const persona = yield models_1.Persona.create({ nombre, apellido });
    res.status(200).json({
        persona
    });
});
exports.postPersona = postPersona;
const PutPersona = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { nombre, apellido } = req.body;
    const persona = yield models_1.Persona.findByPk(id);
    yield persona.update({ nombre: nombre, apellido: apellido });
    res.status(200).json({
        persona
    });
});
exports.PutPersona = PutPersona;
const DeletePersona = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const persona = yield models_1.Persona.findByPk(id);
    yield persona.update({ estado: 0 });
    res.status(200).json({
        msg: 'Se elimino correctamente'
    });
});
exports.DeletePersona = DeletePersona;
module.exports = {
    getAllPersona: exports.getAllPersona,
    getByIdPersona: exports.getByIdPersona,
    postPersona: exports.postPersona,
    PutPersona: exports.PutPersona,
    DeletePersona: exports.DeletePersona
};
//# sourceMappingURL=persona.js.map