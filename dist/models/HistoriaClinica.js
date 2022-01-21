"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const enfermedad_1 = __importDefault(require("./enfermedad"));
const mascota_1 = __importDefault(require("./mascota"));
const tratamiento_1 = __importDefault(require("./tratamiento"));
const HistoriaClinica = connection_1.default.define('HistoriaClinica', {
    id: {
        type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
    },
    comentario: {
        type: sequelize_1.DataTypes.STRING,
    },
});
HistoriaClinica.belongsTo(mascota_1.default, { foreignKey: 'id_mascota', targetKey: 'id' });
HistoriaClinica.belongsTo(tratamiento_1.default, { foreignKey: 'id_tratamiento', targetKey: 'id' });
HistoriaClinica.belongsTo(enfermedad_1.default, { foreignKey: 'id_enfermedad', targetKey: 'id' });
exports.default = HistoriaClinica;
//# sourceMappingURL=historiaClinica.js.map