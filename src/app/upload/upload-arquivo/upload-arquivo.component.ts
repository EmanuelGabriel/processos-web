import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { UploadArquivo } from '../model/upload-arquivo';
import { UploadService } from '../upload.service';

@Component({
  selector: 'app-upload-arquivo',
  templateUrl: './upload-arquivo.component.html',
  styleUrls: ['./upload-arquivo.component.scss']
})
export class UploadArquivoComponent implements OnInit {

  arquivo: UploadArquivo;
  selecionarFile: File;

  form: FormGroup;

  constructor(private titulo: Title,
    private router: Router,
    private spinner: NgxSpinnerService,
    private formBuilder: FormBuilder,
    private uploadService: UploadService,
    private http: HttpClient,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.titulo.setTitle('Novo Arquivo');

    this.form = this.formBuilder.group({
      id: [null],
      type: [null],
      nome: [null],
      dados: [null],
    });
  }

  public onFileChanged(event: any) {
    //Selecionar File
    this.selecionarFile = event.target.files[0];
  }


  onUpload() {
    this.spinner.show();

    const frmData = new FormData();
    frmData.append('file', this.selecionarFile, this.selecionarFile.name);

    this.http.post('http://localhost:8080/upload', frmData, { observe: 'response' }).subscribe(resp => {
      console.log(resp);
      if (resp.status === 200) {
        this.toastr.success('Upload realizado com sucesso!');
        this.router.navigate(['/arquivos']);
      } else {
        this.toastr.warning('Não foi possível realizar o upload');
      }
    }, err => {
      setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.spinner.hide();
      }, 3000);
    }, () => {
      setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.spinner.hide();
      }, 3000);
    });

  }


}
