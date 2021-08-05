import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpfPipe'
})
export class CpfPipePipe implements PipeTransform {

  transform(value: string, ocultarAlgunsValores: boolean = false): string {

    /** 
    if (value.length === 11) {
      return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '\$1.\$2.\$3\-\$4');
    }
    return 'error';
  } */


    let valorFormatado = value + '';

    valorFormatado = valorFormatado
      .padStart(11, '0')                  // item 1
      .substr(0, 11)                      // item 2
      .replace(/[^0-9]/, '')              // item 3
      .replace(                           // item 4
        /(\d{3})(\d{3})(\d{3})(\d{2})/,
        '$1.$2.$3-$4'
      );

    if (ocultarAlgunsValores) {
      valorFormatado = 'XXX.' + valorFormatado.substr(4, 7) + '-XX';
    }

    return valorFormatado;

  }

}
