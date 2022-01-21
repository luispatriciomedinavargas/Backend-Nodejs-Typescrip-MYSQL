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
exports.validarIdPersona = exports.validarIdEnfermedad = exports.validarIdTratamiento = exports.validarIdUsuario = exports.validarIdPersonaUsuario = void 0;
const models_1 = require("../models");
const validarIdPersonaUsuario = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const checkID = yield models_1.Usuarios.findOne({ include: { model: models_1.Persona,
            as: id } });
    if (checkID) {
        throw new Error(`el ${id} ya se encuentra asociado a una cuenta, por favor utilize otro`);
    }
});
exports.validarIdPersonaUsuario = validarIdPersonaUsuario;
const validarIdUsuario = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const checkID = yield models_1.Usuarios.findByPk(id);
    if (!checkID) {
        throw new Error(`no existe un usuario con ese id`);
    }
});
exports.validarIdUsuario = validarIdUsuario;
const validarIdTratamiento = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const checkID = yield models_1.Tratamiento.findByPk(id);
    if (!checkID) {
        throw new Error(`no existe un tratamiento con ese id`);
    }
});
exports.validarIdTratamiento = validarIdTratamiento;
const validarIdEnfermedad = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const checkID = yield models_1.Enfermedad.findByPk(id);
    if (!checkID) {
        throw new Error(`no existe un enfermedad con ese id`);
    }
});
exports.validarIdEnfermedad = validarIdEnfermedad;
const validarIdPersona = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const checkID = yield models_1.Persona.findByPk(id);
    if (!checkID) {
        throw new Error(`no existe un persona con ese id`);
    }
});
exports.validarIdPersona = validarIdPersona;
//# sourceMappingURL=db-validators.js.map