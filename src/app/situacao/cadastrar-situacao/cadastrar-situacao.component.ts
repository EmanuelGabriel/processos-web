import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FileModelResponse } from '../model/file-model-response';
import { Situacao } from '../model/situacao';
import { SituacaoDTO } from '../model/situacaoDTO';
import { SituacaoService } from '../situacao.service';

@Component({
  selector: 'app-cadastrar-situacao',
  templateUrl: './cadastrar-situacao.component.html',
  styleUrls: ['./cadastrar-situacao.component.scss']
})
export class CadastrarSituacaoComponent implements OnInit {

  frmSituacao: FormGroup;
  situacao: Situacao;
  situacaoDto: SituacaoDTO;
  fileModel: FileModelResponse;

  id: any;
  editar: any;

  selecionarFile: File;
  arquivos = new Array<any>();

  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName: any;

  constructor(private title: Title,
    private fb: FormBuilder,
    private situacaoService: SituacaoService,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.title.setTitle('Nova Situação');

    this.route.params.subscribe(resp => {
      this.id = resp.id;
      if (resp.editar) {
        this.editar = resp.editar === 'true';
      }
    });


    if (this.id) {
      this.situacaoService.getById(this.id).subscribe(resp => {
        this.frmSituacao.patchValue({
          id: resp.id,
          descricao: resp.descricao
        });
      });

      this.title.setTitle('Editar Situação');
      if (!this.editar) {
        this.frmSituacao.disable();
      }

    } else {
    }



    this.validarForm();

    this.getAll();
  }

  getById(id: number) {
    this.situacaoService.getById(id).subscribe(resp => {
      this.situacao = resp;
    });
  }


  get editando() {
    return Boolean(this.situacao.id);
  }


  validarForm() {
    this.frmSituacao = this.fb.group({
      descricao: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(90)]),
    });
  }


  onSubmit() {
    console.log(this.frmSituacao.value);
    this.situacaoService.criar(this.frmSituacao.value).subscribe(resp => {
      this.situacaoDto = resp;
      this.toastr.success('Situação adicionada com sucesso!')
      this.router.navigate(['/situacao']);
    });
  }

  limparForm(): void {
    this.frmSituacao.reset();

  }

  public onFileChanged(event: any) {
    //Selecionar File
    this.selecionarFile = event.target.files[0];
  }


  onUpload() {
    console.log(this.selecionarFile);
    const uploadImageData = new FormData();
    uploadImageData.append('file', this.selecionarFile, this.selecionarFile.name);
    // this.http.post('http://localhost:9090/v1/uploads',
    this.http.post('http://localhost:8080/upload', uploadImageData, { observe: 'response' })
      .subscribe((response) => {
        console.log(response.body);
        if (response.status === 200) {
          this.arquivos.push(response.body);
          this.toastr.success('Upload realizado com sucesso!')
        } else {
          this.toastr.warning('Não foi possível realizar o upload da imagem')
        }
      });

  }

  getAll() {
    this.http.get('http://localhost:8080/upload').subscribe((resp) => {
      console.log(resp);
      this.arquivos.push(resp);
      //this.arquivos = resp;
    });

  }

  getDownload() {
    const parametros = new HttpParams()
      .set('nomeImagem', this.imageName);
    //    console.log(`${this.url}/nome?${parametros.toString()}`);     
    // return this.http.get<any>(`${this.url}/nome?${parametros.toString()}`).pipe(take(1)); 
    // http://localhost:9090/v1/uploads/get?nomeImagem=Boleto_494865. 
    // Request URL: http://localhost:9090/v1/uploads/get?nomeImagem=undefined
    // http://localhost:9090/v1/uploads/getTest/Boleto_494865.pdf
    // this.http.post('http://localhost:8080/upload'
    this.http.get('http://localhost:8080/upload' + this.imageName).subscribe(resp => {
      this.retrieveResonse = resp;
      this.base64Data = this.retrieveResonse.image;
      this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
    });
  }



}
