"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const objeto2_1 = __importDefault(require("../modelo/objeto2"));
const fabrica_1 = __importDefault(require("./fabrica"));
class FabricaObjeto2 extends fabrica_1.default {
    criarObjeto() {
        let objeto = new objeto2_1.default();
        objeto.atributo1 = "atr1";
        objeto.atributo2 = "atr2";
        return objeto;
    }
}
exports.default = FabricaObjeto2;
