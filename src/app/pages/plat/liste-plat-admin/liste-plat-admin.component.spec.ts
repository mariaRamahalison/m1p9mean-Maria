import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListePlatAdminComponent } from './liste-plat-admin.component';

describe('ListePlatAdminComponent', () => {
  let component: ListePlatAdminComponent;
  let fixture: ComponentFixture<ListePlatAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListePlatAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListePlatAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
