import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-upload-arquivo',
  templateUrl: './upload-arquivo.component.html',
  styleUrls: ['./upload-arquivo.component.scss']
})
export class UploadArquivoComponent implements OnInit {

  constructor(private titulo: Title,
    private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.titulo.setTitle('Novo Arquivo');
  }



}
