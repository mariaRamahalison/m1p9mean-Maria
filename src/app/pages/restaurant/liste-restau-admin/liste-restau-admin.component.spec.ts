import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeRestauAdminComponent } from './liste-restau-admin.component';

describe('ListeRestauAdminComponent', () => {
  let component: ListeRestauAdminComponent;
  let fixture: ComponentFixture<ListeRestauAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeRestauAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeRestauAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
