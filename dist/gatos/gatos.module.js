"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GatosModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const gato_1 = require("./gato");
const gatos_service_1 = require("./gatos.service");
const gatos_controller_1 = require("./gatos.controller");
let GatosModule = class GatosModule {
};
GatosModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: gato_1.Gato.name,
                    schema: gato_1.GatoSchema
                }
            ])
        ],
        exports: [],
        controllers: [gatos_controller_1.GatosController],
        providers: [gatos_service_1.GatosService]
    })
], GatosModule);
exports.GatosModule = GatosModule;
//# sourceMappingURL=gatos.module.js.map