import { Model } from 'mongoose';
import { Produtos } from './produtos';
export declare class ProdutosService {
    private produtosModel;
    constructor(produtosModel: Model<Produtos>);
    listarTodos(): Promise<Produtos[]>;
    criar(Produtos: Produtos): Promise<Produtos>;
    buscarPorId(id: string): Promise<Produtos>;
    atualizar(id: string, Produtos: Produtos): Promise<Produtos>;
    remover(id: string): Promise<Produtos>;
}
