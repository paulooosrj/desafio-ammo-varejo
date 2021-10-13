import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Produtos } from './produtos';
import { ProdutosService } from './produtos.service';

@Controller('produtos')
export class ProdutosController {
  constructor(
    private readonly produtosService: ProdutosService
  ) {}

  @Get()
  async listarTodos(): Promise<Produtos[]> {
    return this.produtosService.listarTodos();
  }

  @Post()
  async criar(@Body() produtos: Produtos): Promise<Produtos> {
    return this.produtosService.criar(produtos);
  }

  @Get(':id')
  async buscarPorId(@Param('id') id: string): Promise<Produtos> {
    return this.produtosService.buscarPorId(id);
  }

  @Put(':id')
  async atualizar(@Param('id') id: string, @Body() produtosAtualizado: Produtos): Promise<Produtos> {
    return this.produtosService.atualizar(id, produtosAtualizado);
  }

  @Delete(':id')
  async remover(@Param('id') id: string): Promise<Produtos> {
    return this.produtosService.remover(id);
  }

}
