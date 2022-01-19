"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Persona = connection_1.default.define('Persona', {
    id: {
        type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING,
    },
    apellido: {
        type: sequelize_1.DataTypes.STRING,
    },
    estado: {
        type: sequelize_1.DataTypes.TINYINT,
        defaultValue: 1
    },
});
exports.default = Persona;
//# sourceMappingURL=persona.js.map