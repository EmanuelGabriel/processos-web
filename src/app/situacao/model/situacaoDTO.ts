import { Situacao } from "./situacao";

export interface SituacaoDTO {

    content: Situacao[],
    totalElements: number,
    size: number,
    number: number,
    empty: false,
    numberOfElements: number,
    last: boolean,
    first: boolean,
    pagina: 0,
    itensPorPagina: 5
    
}
