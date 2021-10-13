import { Document } from 'mongoose';
export declare class Produtos extends Document {
    nome: string;
    imagem: string;
    preco: string;
}
export declare const produtoschema: import("mongoose").Schema<any>;
