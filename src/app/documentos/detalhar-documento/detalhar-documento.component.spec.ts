import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalharDocumentoComponent } from './detalhar-documento.component';

describe('DetalharDocumentoComponent', () => {
  let component: DetalharDocumentoComponent;
  let fixture: ComponentFixture<DetalharDocumentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalharDocumentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalharDocumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
