import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Produtos extends Document {

  @Prop()
  nome: string;

  @Prop()
  imagem: string;

  @Prop()
  preco: string;

}

export const produtoschema = SchemaFactory.createForClass(Produtos);
