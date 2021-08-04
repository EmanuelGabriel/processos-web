import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { UploadService } from '../upload.service';
import { UploadArquivo } from '../model/upload-arquivo';



@Component({
  selector: 'app-listagem-upload-arquivo',
  templateUrl: './listagem-upload-arquivo.component.html',
  styleUrls: ['./listagem-upload-arquivo.component.scss']
})
export class ListagemUploadArquivoComponent implements OnInit {

  arquivos: UploadArquivo[] = [];
  uploadArquivo: UploadArquivo;
  nomeArquivo: any;
  arrayArquivo: any;
  value: string;


  retrievedImage: any;
  base64Data: any;
  resposta: any;
  id: number;


  constructor(private titulo: Title,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private uploadService: UploadService,
    private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.titulo.setTitle('Consultar Arquivos');

    this.getAll();

  }

  procura() {
    this.uploadService.getAll().subscribe(dados => {
      if (this.value) {
        dados = dados.filter(coluna => {
          return coluna.nome.trim().toLocaleLowerCase().indexOf(this.value.trim().toLocaleLowerCase()) >= 0 ||
            coluna.type.trim().toLocaleLowerCase().indexOf(this.value.trim().toLocaleLowerCase()) >= 0 ||
            coluna.tamanho.toString().toLocaleLowerCase().indexOf(this.value.trim().toLocaleLowerCase()) >= 0
        });
      }

      this.arquivos = dados;
      console.log(dados);
    });
  }

  filtro() {
    this.procura();
  }

  getAll() {
    this.spinner.show();
    this.uploadService.getAll().subscribe((resp) => {
      this.arquivos = resp;
      console.log(resp);
    }, err => {
      setTimeout(() => {
        this.spinner.hide();
      }, 3000);
    }, () => {
      setTimeout(() => {
        this.spinner.hide();
      }, 3000);
    });
  }


  /**
  * Realizar download dos arquivos
  * @param arquivo 
  * data:image/jpeg;base64, const dataUrl = `data:${contentType};base64,${b64Data}`;
  */
  async downloadArquivos(arquivo: UploadArquivo) {

    const dataUrl = `data:${arquivo.type};base64,${arquivo.dados}`;
    const base64 = await fetch(dataUrl);

    console.log(base64 + dataUrl);

    const blob = await base64.blob();

    let file = new Blob([blob],
      {
        type: `${arquivo.type}` //'application/pdf'

      });

    console.log(file);
    let fileURL = URL.createObjectURL(file);
    console.log(fileURL);
    window.open(fileURL);
  }

  async insereArquivo(event: any) {
    if (event.target.files[0].size > 2097152) {
      this.toastr.warning("Permitido Anexar arquivos com tamanho de até 2MB");
      return;
    }

    const base64String = await this.convertBlobToBase64(event.target.files[0]);
    this.arquivos = event.target.files[0];
    this.arrayArquivo = base64String;
    this.nomeArquivo = event.target.files[0].name;

  }

  convertBlobToBase64 = (blob: any) => new Promise((resolve, reject) => {
    const reader = new FileReader;
    reader.onerror = reject;
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.readAsDataURL(blob);
  });


  /**
   * @author emanuel.sousa
   * Método responsável em formatar os bytes do tamanho do arquivo
   * @param bytes 
   * @param decimals 
   * @returns string
   */
  formatarBytes(bytes: any, decimals = 2) {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const tamanhos = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + tamanhos[i];
  }

}
