import { Document } from 'mongoose';
export declare class Gato extends Document {
    nome: string;
    idade: number;
    raca: string;
}
export declare const GatoSchema: import("mongoose").Schema<any>;
