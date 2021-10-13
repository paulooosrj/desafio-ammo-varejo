import { Model } from 'mongoose';
import { Gato } from './gato';
export declare class GatosService {
    private gatoModel;
    constructor(gatoModel: Model<Gato>);
    listarTodos(): Promise<Gato[]>;
    criar(gato: Gato): Promise<Gato>;
    buscarPorId(id: string): Promise<Gato>;
    atualizar(id: string, gato: Gato): Promise<Gato>;
    remover(id: string): Promise<Gato>;
}
