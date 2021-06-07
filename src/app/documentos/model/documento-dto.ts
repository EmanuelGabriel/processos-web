import { Documento } from "./documento";

export interface DocumentoDto {
    content: Documento[],
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
