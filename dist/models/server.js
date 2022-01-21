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
const auth_1 = __importDefault(require("../routes/auth"));
const usuario_1 = __importDefault(require("../routes/usuario"));
const enfermedad_1 = __importDefault(require("../routes/enfermedad"));
const tratamiento_1 = __importDefault(require("../routes/tratamiento"));
const connection_1 = __importDefault(require("../db/connection"));
const persona_1 = __importDefault(require("./persona"));
const usuarios_1 = __importDefault(require("./usuarios"));
const enfermedad_2 = __importDefault(require("./enfermedad"));
const tratamiento_2 = __importDefault(require("./tratamiento"));
const mascota_1 = __importDefault(require("./mascota"));
const _1 = require(".");
const index_1 = require("../seeders/index");
class Server {
    constructor() {
        this.apiPaths = {
            usuarios: '/api/usuarios',
            auth: '/api/auth',
            tratamiento: '/api/tratamiento',
            enfermedad: '/api/enfermedad',
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '8080';
        //Metodos iniciales
        this.dbconnection();
        this.entites();
        this.middlewares();
        this.routes();
        this.seeds();
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
        persona_1.default.sync();
        usuarios_1.default.sync();
        mascota_1.default.sync();
        enfermedad_2.default.sync();
        tratamiento_2.default.sync();
        _1.HistoriaClinica.sync();
    }
    ;
    middlewares() {
        //CORS
        this.app.use((0, cors_1.default)());
        //lectura BODY
        this.app.use(express_1.default.json());
        //Capeta publica
        this.app.use(express_1.default.static('public'));
    }
    routes() {
        this.app.use(this.apiPaths.auth, auth_1.default);
        this.app.use(this.apiPaths.usuarios, usuario_1.default);
        this.app.use(this.apiPaths.tratamiento, tratamiento_1.default);
        this.app.use(this.apiPaths.enfermedad, enfermedad_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor Corriendo en puerto ${this.port}`);
        });
    }
    seeds() {
        return __awaiter(this, void 0, void 0, function* () {
            for (const enfermedad of index_1.enfermedades) {
                const id = yield enfermedad_2.default.findByPk(enfermedad.id);
                if (!id) {
                    enfermedad_2.default.create(enfermedad);
                }
            }
            for (const tratamiento of index_1.tratamientos) {
                const id = yield tratamiento_2.default.findByPk(tratamiento.id);
                if (!id) {
                    tratamiento_2.default.create(tratamiento);
                }
            }
            for (const persona of index_1.personas) {
                const id = yield persona_1.default.findByPk(persona.id);
                if (!id) {
                    persona_1.default.create(persona);
                }
            }
            for (const mascota of index_1.mascotas) {
                const id = yield mascota_1.default.findByPk(mascota.id);
                if (!id) {
                    mascota_1.default.create(mascota);
                }
            }
            for (const usuario of index_1.usuarios) {
                const id = yield usuarios_1.default.findByPk(usuario.id);
                if (!id) {
                    usuarios_1.default.create(usuario);
                }
            }
            for (const historiaClinica of index_1.historiaClinicas) {
                const id = yield _1.HistoriaClinica.findByPk(historiaClinica.id);
                if (!id) {
                    _1.HistoriaClinica.create(historiaClinica);
                }
            }
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map