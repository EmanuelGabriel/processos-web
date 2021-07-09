import { Cliente } from "./cliente";

export class FiltroCliente {

    content: Cliente[];
    totalElements: number;
    size: number;
    number: number;
    empty: false;
    numberOfElements: number;
    last: boolean;
    first: boolean;

    pagina = 0;
    itensPorPagina = 5;

    nome: string;


}
