import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificarSegurancaComponent } from './verificar-seguranca.component';

describe('VerificarSegurancaComponent', () => {
  let component: VerificarSegurancaComponent;
  let fixture: ComponentFixture<VerificarSegurancaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerificarSegurancaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificarSegurancaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
