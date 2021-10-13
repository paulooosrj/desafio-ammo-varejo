import { Gato } from './gato';
import { GatosService } from './gatos.service';
export declare class GatosController {
    private readonly gatosService;
    constructor(gatosService: GatosService);
    listarTodos(): Promise<Gato[]>;
    criar(gato: Gato): Promise<Gato>;
    buscarPorId(id: string): Promise<Gato>;
    atualizar(id: string, gatoAtualizado: Gato): Promise<Gato>;
    remover(id: string): Promise<Gato>;
}
