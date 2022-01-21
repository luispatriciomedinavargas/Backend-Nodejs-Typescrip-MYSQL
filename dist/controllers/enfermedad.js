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
exports.deleteEnfermedad = exports.putEnfermedad = exports.postEnfermedad = exports.GetByIdEnfermedad = exports.getAllEnfermedad = void 0;
const models_1 = require("../models");
const getAllEnfermedad = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const getEnfermedades = yield models_1.Enfermedad.findAll({
        where: { estado: 1 }
    });
    res.status(200).json({
        getEnfermedades
    });
});
exports.getAllEnfermedad = getAllEnfermedad;
const GetByIdEnfermedad = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const byIdEnfermedad = yield models_1.Enfermedad.findOne({
        where: { id: id, estado: 1 }
    });
    if (!byIdEnfermedad) {
        return res.status(404).json({
            msg: 'No se pudo encontrar con ese id, por favor utilice otro'
        });
    }
    res.status(200).json({
        byIdEnfermedad
    });
});
exports.GetByIdEnfermedad = GetByIdEnfermedad;
const postEnfermedad = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { descripcion } = req.body;
    const postEnfermedad = yield models_1.Enfermedad.create({ descripcion });
    res.status(200).json({
        postEnfermedad
    });
});
exports.postEnfermedad = postEnfermedad;
const putEnfermedad = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { descripcion } = req.body;
    const postEnfermedad = yield models_1.Enfermedad.findByPk(id);
    postEnfermedad === null || postEnfermedad === void 0 ? void 0 : postEnfermedad.update({ descripcion });
    res.status(200).json({
        postEnfermedad
    });
});
exports.putEnfermedad = putEnfermedad;
const deleteEnfermedad = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const deleteEnfermedad = yield models_1.Enfermedad.findByPk(id);
    deleteEnfermedad === null || deleteEnfermedad === void 0 ? void 0 : deleteEnfermedad.update({ estado: 0 });
    res.status(200).json({
        msg: 'Se elimino correctamente'
    });
});
exports.deleteEnfermedad = deleteEnfermedad;
module.exports = {
    getAllEnfermedad: exports.getAllEnfermedad,
    GetByIdEnfermedad: exports.GetByIdEnfermedad,
    postEnfermedad: exports.postEnfermedad,
    putEnfermedad: exports.putEnfermedad,
    deleteEnfermedad: exports.deleteEnfermedad
};
//# sourceMappingURL=enfermedad.js.map