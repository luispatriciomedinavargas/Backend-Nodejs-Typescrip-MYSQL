"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const persona_1 = __importDefault(require("./persona"));
const Usuario = connection_1.default.define('Usuario', {
    id: {
        type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
    },
    password: {
        type: sequelize_1.DataTypes.STRING
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        unique: true
    },
    estado: {
        type: sequelize_1.DataTypes.BOOLEAN
    },
});
// Cual es la diferencia entre  estos tres?
Usuario.belongsTo(persona_1.default, { foreignKey: 'id', as: 'id_persona' });
// Usuario.hasOne(Persona)
exports.default = Usuario;
//# sourceMappingURL=usuarios.js.map