import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { UploadArquivo } from '../model/upload-arquivo';
import { UploadService } from '../upload.service';
import { DomSanitizer } from '@angular/platform-browser';



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


  retrievedImage: any;
  base64Data: any;
  resposta: any;
  id: number;


  constructor(private titulo: Title,
    private sanitizer: DomSanitizer,
    private router: Router,
    private httpClient: HttpClient,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private uploadService: UploadService,
    private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.titulo.setTitle('Consultar Arquivos');

    this.getAll();
  }


  getAll() {
    this.spinner.show();
    this.uploadService.getAll().subscribe((resp) => {
      this.arquivos = resp;
      console.log(resp);
    }, err => {
      this.spinner.hide();
    }, () => {
      this.spinner.hide();
    });
  }


  //this.retrieveResonse = resp;
  //this.base64Data = this.retrieveResonse.image;
  //this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
  getImagem() {
    this.httpClient.get('http://localhost:8080/upload/' + this.uploadArquivo.id)
      .subscribe(resp => {
        this.resposta = resp;
        this.base64Data = this.resposta.dados;
        this.retrievedImage = 'data:application/pdf;base64,' + this.base64Data;
      });
  }

  //const blob = new Blob([data], { type: 'application/octet-stream' });
  //this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));

  async downloadArquivo(arquivo: UploadArquivo) {
    const base64 = await fetch(arquivo.dados);
    console.log(base64);
    const blob = await base64.blob();
    console.log(blob);
    let file = new Blob([arquivo.dados], { type: 'application/octet-stream' });
    let fileURL = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(file));
    //window.open(fileURL);
    //URL.createObjectURL(file);
    console.log(fileURL);
    //window.open(fileURL);
  }

  /**
  * Realizar download dos arquivos
  * @param arquivo 
  * application/octet-stream
  * data:image/jpeg;base64,
  */
  async downloadArquivos(arquivo: UploadArquivo) {
    const base64 = await fetch('data:application/octet-stream;base64,' + arquivo.dados);
    const blob = await base64.blob();
    let file = new Blob([blob], { type: 'application/pdf'});
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

}
