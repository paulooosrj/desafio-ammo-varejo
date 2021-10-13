import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Produtos, produtoschema } from './produtos';
import { ProdutosService } from './produtos.service';
import { ProdutosController } from './produtos.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Produtos.name,
        schema: produtoschema
      }
    ])
  ],
  exports: [],
  controllers: [ProdutosController],
  providers: [ProdutosService]
})
export class ProdutosModule {}
