"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const persona_1 = __importDefault(require("./persona"));
const Mascota = connection_1.default.define('Mascota', {
    id: {
        type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING,
    },
    estado: {
        type: sequelize_1.DataTypes.TINYINT,
        defaultValue: 1
    },
    edad: {
        type: sequelize_1.DataTypes.DATE,
    },
    comentario: {
        type: sequelize_1.DataTypes.STRING,
    },
    id_persona: {
        type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
        references: {
            model: persona_1.default,
            key: 'id'
        }
    }
});
exports.default = Mascota;
//# sourceMappingURL=mascota.js.map