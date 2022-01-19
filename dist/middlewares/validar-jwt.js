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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const usuarios_1 = __importDefault(require("../models/usuarios"));
const validarJWT = (req = express_1.request, res = express_1.response, next) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.header('x-token');
    const secretkey = process.env.SECRETORPRIVATEKEY || 'Pablit0C14VoUnClavo';
    if (!token) {
        return res.status(401).json({
            msg: 'does not exist token in the request.'
        });
    }
    try {
        const gettingID = jsonwebtoken_1.default.verify(token, secretkey);
        const id = Object.values(gettingID).length - 2;
        const userAuth = yield usuarios_1.default.findByPk(id);
        const estado = Object.values(userAuth);
        if (!estado[0].estado) {
            return res.status(401).json({
                msg: 'ese usuario esta borrado'
            });
        }
        req.usuario = userAuth;
        next();
    }
    catch (error) {
        console.log(error);
        res.status(401).json({
            msg: 'invalid token.'
        });
    }
});
exports.default = validarJWT;
//# sourceMappingURL=validar-jwt.js.map