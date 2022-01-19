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
const enfermedad_2 = require("../seeders/enfermedad");
const historiaClinica_1 = require("../seeders/historiaClinica");
const mascota_2 = require("../seeders/mascota");
const persona_2 = require("../seeders/persona");
const tratamiento_2 = require("../seeders/tratamiento");
const usuario_2 = require("../seeders/usuario");
class Server {
    constructor() {
        this.apiPaths = {
            usuarios: '/api/usuarios'
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
        enfermedad_1.default.sync();
        tratamiento_1.default.sync();
        HistoriaClinica_1.default.sync();
    }
    ;
    seeds() {
        return __awaiter(this, void 0, void 0, function* () {
            for (const enfermedad of enfermedad_2.enfermedades) {
                const id = yield enfermedad_1.default.findByPk(enfermedad.id);
                if (!id) {
                    enfermedad_1.default.create(enfermedad);
                }
            }
            for (const persona of historiaClinica_1.historiaClinicas) {
                const id = yield persona_1.default.findByPk(persona.id);
                if (!id) {
                    persona_1.default.create(persona);
                }
            }
            for (const mascota of mascota_2.mascotas) {
                const id = yield mascota_1.default.findByPk(mascota.id);
                if (!id) {
                    mascota_1.default.create(mascota);
                }
            }
            for (const tratamiento of tratamiento_2.tratamientos) {
                const id = yield tratamiento_1.default.findByPk(tratamiento.id);
                if (!id) {
                    tratamiento_1.default.create(tratamiento);
                }
            }
            for (const usuario of usuario_2.usuarios) {
                const id = yield usuarios_1.default.findByPk(usuario.id);
                if (!id) {
                    usuarios_1.default.create(usuario);
                }
            }
            for (const persona of persona_2.personas) {
                const id = yield persona_1.default.findByPk(persona.id);
                if (!id) {
                    persona_1.default.create(persona);
                }
            }
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