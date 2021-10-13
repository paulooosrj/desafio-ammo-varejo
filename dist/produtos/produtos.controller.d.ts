import { Produtos } from './produtos';
import { ProdutosService } from './produtos.service';
export declare class ProdutosController {
    private readonly produtosService;
    constructor(produtosService: ProdutosService);
    listarTodos(): Promise<Produtos[]>;
    criar(produtos: Produtos): Promise<Produtos>;
    buscarPorId(id: string): Promise<Produtos>;
    atualizar(id: string, produtosAtualizado: Produtos): Promise<Produtos>;
    remover(id: string): Promise<Produtos>;
}
