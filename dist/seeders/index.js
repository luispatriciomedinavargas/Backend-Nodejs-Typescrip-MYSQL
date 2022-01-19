"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enfermedad_1 = require("./enfermedad");
const historiaClinica_1 = require("./historiaClinica");
const mascota_1 = require("./mascota");
const persona_1 = require("./persona");
const tratamiento_1 = require("./tratamiento");
const usuario_1 = require("./usuario");
exports.default = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, enfermedad_1.enfermedades), historiaClinica_1.historiaClinicas), mascota_1.mascotas), persona_1.personas), tratamiento_1.tratamientos), usuario_1.usuarios);
//# sourceMappingURL=index.js.map