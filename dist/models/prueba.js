"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = __importDefault(require("sequelize"));
const connection_1 = __importDefault(require("../db/connection"));
const Prueba = connection_1.default.define('Prueba', {
    name: {
        type: sequelize_1.default.STRING,
        allowNull: false,
    },
    estado: {
        type: sequelize_1.default.TINYINT
    },
}, {
    tableName: 'Pene'
});
exports.default = Prueba;
//# sourceMappingURL=prueba.js.map