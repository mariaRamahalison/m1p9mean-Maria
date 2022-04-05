import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulairePlatComponent } from './formulaire-plat.component';

describe('FormulairePlatComponent', () => {
  let component: FormulairePlatComponent;
  let fixture: ComponentFixture<FormulairePlatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulairePlatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulairePlatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
