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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const usuario_1 = __importDefault(require("../routes/usuario"));
const connection_1 = __importDefault(require("../db/connection"));
const persona_1 = __importDefault(require("./persona"));
const usuarios_1 = __importDefault(require("./usuarios"));
const enfermedad_1 = __importDefault(require("./enfermedad"));
const tratamiento_1 = __importDefault(require("./tratamiento"));
const mascota_1 = __importDefault(require("./mascota"));
const HistoriaClinica_1 = __importDefault(require("./HistoriaClinica"));
class Server {
    constructor() {
        this.apiPaths = {
            usuarios: '/api/usuarios'
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '8080';
        //Metodos iniciales
        this.dbconnection();
        this.middlewares();
        this.routes();
        this.entites();
    }
    dbconnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connection_1.default.authenticate();
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    entites() {
        return __awaiter(this, void 0, void 0, function* () {
            yield persona_1.default.sync();
            yield usuarios_1.default.sync();
            yield mascota_1.default.sync();
            yield enfermedad_1.default.sync();
            yield tratamiento_1.default.sync();
            yield HistoriaClinica_1.default.sync();
        });
    }
    middlewares() {
        //CORS
        this.app.use((0, cors_1.default)());
        //lectura BODY
        this.app.use(express_1.default.json());
        //Capeta publica
        this.app.use(express_1.default.static('public'));
    }
    routes() {
        this.app.use(this.apiPaths.usuarios, usuario_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor Corriendo en puerto ${this.port}`);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map