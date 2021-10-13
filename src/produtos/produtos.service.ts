import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Produtos } from './produtos';

@Injectable()
export class ProdutosService {
  constructor(
    @InjectModel(Produtos.name) private produtosModel: Model<Produtos>
  ) {}

  async listarTodos(): Promise<Produtos[]> {
    return this.produtosModel.find().exec();
  }

  async criar(Produtos: Produtos): Promise<Produtos> {
    const ProdutosCriado = new this.produtosModel(Produtos);

    return ProdutosCriado.save();
  }

  async buscarPorId(id: string): Promise<Produtos> {
    return this.produtosModel.findById(id).exec();
  }

  async atualizar(id: string, Produtos: Produtos): Promise<Produtos> {
    return this.produtosModel.findByIdAndUpdate(id, Produtos).exec();
  }

  async remover(id: string) {
    const ProdutosApagado = this.produtosModel.findOneAndDelete({ _id: id }).exec();

    return (await ProdutosApagado).remove();
  }
}
