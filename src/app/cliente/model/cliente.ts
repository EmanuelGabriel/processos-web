import { Endereco } from "./endereco";

export interface Cliente {
    id?: number;
    nome: string;
    rg: string;
    cpf: string;
    email: string;
    telefone: string;
    celular: string;
    dataCadastro: Date;
    dataAtualizacao: Date;
    endereco: Endereco;

}
