"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Tratamiento = connection_1.default.define('Tratamiento', {
    id: {
        type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
    },
    descripcion: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    estado: {
        type: sequelize_1.DataTypes.TINYINT,
        defaultValue: 1
    },
});
exports.default = Tratamiento;
//# sourceMappingURL=tratamiento.js.map