"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GatosService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const gato_1 = require("./gato");
let GatosService = class GatosService {
    constructor(gatoModel) {
        this.gatoModel = gatoModel;
    }
    async listarTodos() {
        return this.gatoModel.find().exec();
    }
    async criar(gato) {
        const gatoCriado = new this.gatoModel(gato);
        return gatoCriado.save();
    }
    async buscarPorId(id) {
        return this.gatoModel.findById(id).exec();
    }
    async atualizar(id, gato) {
        return this.gatoModel.findByIdAndUpdate(id, gato).exec();
    }
    async remover(id) {
        const gatoApagado = this.gatoModel.findOneAndDelete({ _id: id }).exec();
        return (await gatoApagado).remove();
    }
};
GatosService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(gato_1.Gato.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], GatosService);
exports.GatosService = GatosService;
//# sourceMappingURL=gatos.service.js.map