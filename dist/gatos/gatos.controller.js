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
exports.GatosController = void 0;
const common_1 = require("@nestjs/common");
const gato_1 = require("./gato");
const gatos_service_1 = require("./gatos.service");
let GatosController = class GatosController {
    constructor(gatosService) {
        this.gatosService = gatosService;
    }
    async listarTodos() {
        return this.gatosService.listarTodos();
    }
    async criar(gato) {
        return this.gatosService.criar(gato);
    }
    async buscarPorId(id) {
        return this.gatosService.buscarPorId(id);
    }
    async atualizar(id, gatoAtualizado) {
        return this.gatosService.atualizar(id, gatoAtualizado);
    }
    async remover(id) {
        return this.gatosService.remover(id);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GatosController.prototype, "listarTodos", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [gato_1.Gato]),
    __metadata("design:returntype", Promise)
], GatosController.prototype, "criar", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GatosController.prototype, "buscarPorId", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, gato_1.Gato]),
    __metadata("design:returntype", Promise)
], GatosController.prototype, "atualizar", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GatosController.prototype, "remover", null);
GatosController = __decorate([
    common_1.Controller('gatos'),
    __metadata("design:paramtypes", [gatos_service_1.GatosService])
], GatosController);
exports.GatosController = GatosController;
//# sourceMappingURL=gatos.controller.js.map