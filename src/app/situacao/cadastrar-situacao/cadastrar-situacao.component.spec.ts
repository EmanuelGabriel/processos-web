import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarSituacaoComponent } from './cadastrar-situacao.component';

describe('CadastrarSituacaoComponent', () => {
  let component: CadastrarSituacaoComponent;
  let fixture: ComponentFixture<CadastrarSituacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarSituacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarSituacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
