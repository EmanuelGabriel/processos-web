import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarSituacaoComponent } from './consultar-situacao.component';

describe('ConsultarSituacaoComponent', () => {
  let component: ConsultarSituacaoComponent;
  let fixture: ComponentFixture<ConsultarSituacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarSituacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarSituacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
