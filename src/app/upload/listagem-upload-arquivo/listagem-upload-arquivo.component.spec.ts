import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemUploadArquivoComponent } from './listagem-upload-arquivo.component';

describe('ListagemUploadArquivoComponent', () => {
  let component: ListagemUploadArquivoComponent;
  let fixture: ComponentFixture<ListagemUploadArquivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListagemUploadArquivoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemUploadArquivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
