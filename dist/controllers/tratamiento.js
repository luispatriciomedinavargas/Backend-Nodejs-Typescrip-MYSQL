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
exports.putTratamiento = exports.deleteTratamiento = exports.postTratamiento = exports.getByIdTratamiento = exports.getAllTratamiento = void 0;
const models_1 = require("../models");
const getAllTratamiento = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const AllTratamiento = yield models_1.Tratamiento.findAll({
        where: {
            estado: true
        }
    });
    return res.status(200).json({
        AllTratamiento
    });
});
exports.getAllTratamiento = getAllTratamiento;
const getByIdTratamiento = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const getById = yield models_1.Tratamiento.findOne({ where: { id: id, estado: true, } });
    if (!getById) {
        return res.status(500).json({
            msg: 'el id no puede ser null'
        });
    }
    res.status(200).json({
        getById
    });
});
exports.getByIdTratamiento = getByIdTratamiento;
const postTratamiento = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { descripcion } = req.body;
    const postTratamiento = yield models_1.Tratamiento.create({ descripcion });
    res.status(200).json({
        postTratamiento
    });
});
exports.postTratamiento = postTratamiento;
const deleteTratamiento = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const deleteTratamiento = yield models_1.Tratamiento.findByPk(id);
    yield (deleteTratamiento === null || deleteTratamiento === void 0 ? void 0 : deleteTratamiento.update({ estado: false }));
    res.status(200).json({
        deleteTratamiento
    });
});
exports.deleteTratamiento = deleteTratamiento;
const putTratamiento = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { descripcion } = req.body;
    const putTratamiento = yield models_1.Tratamiento.findByPk(id);
    yield (putTratamiento === null || putTratamiento === void 0 ? void 0 : putTratamiento.update({ descripcion }));
    res.status(200).json({
        putTratamiento
    });
});
exports.putTratamiento = putTratamiento;
module.exports = {
    getAllTratamiento: exports.getAllTratamiento,
    getByIdTratamiento: exports.getByIdTratamiento,
    postTratamiento: exports.postTratamiento,
    deleteTratamiento: exports.deleteTratamiento,
    putTratamiento: exports.putTratamiento
};
//# sourceMappingURL=tratamiento.js.map