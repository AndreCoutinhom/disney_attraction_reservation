import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Alteracao } from './alteracao';

describe('Alteracao', () => {
  let component: Alteracao;
  let fixture: ComponentFixture<Alteracao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Alteracao]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Alteracao);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
